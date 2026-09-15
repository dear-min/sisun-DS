import React, { forwardRef, createContext, useContext, useRef, useEffect, useImperativeHandle } from 'react';
import type { CheckboxProps, CheckboxGroupProps } from './types';
import './checkbox.css';

interface CheckboxContextValue {
  name?: string;
  values?: (string | number)[];
  disabled?: boolean;
  onChange?: (val: string | number, isChecked: boolean) => void;
}

const CheckboxContext = createContext<CheckboxContextValue | null>(null);

/**
 * Atelier Fashion Design System - Checkbox Component
 * 피그마 "00. Common Design System"의 Check Box 원자 단위 컴포넌트입니다.
 *
 * - Class Name: `check` (별칭: `checkbox`)
 * - Type: `unchecked` (default) | `checked`
 * - Disabled: `false` (default) | `true`
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      type,
      checked: controlledChecked,
      defaultChecked,
      indeterminate = false,
      disabled: explicitDisabled,
      label,
      value,
      name: explicitName,
      onChange,
      className = '',
      children,
      id,
      ...rest
    },
    ref
  ) => {
    const groupContext = useContext(CheckboxContext);
    const internalRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

    // Group context inheritance
    const name = explicitName ?? groupContext?.name;
    const isGroupDisabled = groupContext?.disabled ?? false;
    const effectiveDisabled = explicitDisabled ?? isGroupDisabled;

    // Determine checked state (Context > controlledChecked > type === 'checked')
    let isEffectiveChecked = controlledChecked;
    if (groupContext && groupContext.values !== undefined && value !== undefined) {
      isEffectiveChecked = groupContext.values.includes(value);
    } else if (isEffectiveChecked === undefined && type !== undefined) {
      isEffectiveChecked = type === 'checked';
    }

    // Sync indeterminate DOM property
    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (effectiveDisabled) return;
      if (onChange) {
        onChange(e);
      }
      if (groupContext?.onChange && value !== undefined) {
        groupContext.onChange(value, e.target.checked);
      }
    };

    const hasLabel = label !== undefined || children !== undefined;

    const classNames = [
      'check',
      'checkbox',
      isEffectiveChecked ? 'check--checked checkbox--checked' : 'check--unchecked checkbox--unchecked',
      effectiveDisabled ? 'check--disabled checkbox--disabled' : '',
      indeterminate ? 'check--indeterminate checkbox--indeterminate' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={classNames}>
        <input
          ref={internalRef}
          type="checkbox"
          name={name}
          value={value}
          checked={isEffectiveChecked}
          defaultChecked={defaultChecked}
          disabled={effectiveDisabled}
          onChange={handleChange}
          className="check__input checkbox__input"
          id={id}
          {...rest}
        />
        <span className="check__box checkbox__box" aria-hidden="true">
          <svg
            className="check__icon checkbox__icon"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 5.2L4.2 7.5L8 2.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {hasLabel && (
          <span className="check__label checkbox__label">
            {label}
            {children}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

/**
 * Atelier Fashion Design System - CheckboxGroup Component
 * 다중 선택 체크박스 그룹 관리를 위한 컨테이너 컴포넌트입니다.
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  value: controlledValue,
  defaultValue = [],
  name,
  disabled = false,
  onChange,
  direction = 'vertical',
  children,
  className = '',
}) => {
  const [internalValues, setInternalValues] = React.useState<(string | number)[]>(
    controlledValue ?? defaultValue
  );

  const effectiveValues = controlledValue !== undefined ? controlledValue : internalValues;

  const handleGroupChange = (val: string | number, isChecked: boolean) => {
    let nextValues: (string | number)[];
    if (isChecked) {
      nextValues = [...effectiveValues, val];
    } else {
      nextValues = effectiveValues.filter((v) => v !== val);
    }

    if (controlledValue === undefined) {
      setInternalValues(nextValues);
    }
    onChange?.(nextValues);
  };

  const contextValue: CheckboxContextValue = {
    name,
    values: effectiveValues,
    disabled,
    onChange: handleGroupChange,
  };

  const groupClassNames = [
    'check-group',
    'checkbox-group',
    `check-group--${direction}`,
    `checkbox-group--${direction}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <CheckboxContext.Provider value={contextValue}>
      <div className={groupClassNames} role="group">
        {children}
      </div>
    </CheckboxContext.Provider>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
