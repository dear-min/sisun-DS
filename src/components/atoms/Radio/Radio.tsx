import React, { forwardRef, createContext, useContext } from 'react';
import type { RadioProps, RadioGroupProps } from './types';
import './radio.css';

interface RadioContextValue {
  name?: string;
  value?: string | number;
  disabled?: boolean;
  onChange?: (value: string | number) => void;
}

const RadioContext = createContext<RadioContextValue | null>(null);

/**
 * Atelier Fashion Design System - Radio Component
 * 피그마 "00. Common Design System"의 Radio 원자 단위 컴포넌트입니다.
 *
 * - Class Name: `radio`
 * - Type: `unchecked` (default) | `checked`
 * - Disabled: `false` (default) | `true`
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      type,
      checked: controlledChecked,
      defaultChecked,
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
    const groupContext = useContext(RadioContext);

    // Group context inheritance
    const name = explicitName ?? groupContext?.name;
    const isGroupDisabled = groupContext?.disabled ?? false;
    const effectiveDisabled = explicitDisabled ?? isGroupDisabled;

    // Determine checked state (Context > controlledChecked > type === 'checked')
    let isEffectiveChecked = controlledChecked;
    if (groupContext && value !== undefined) {
      isEffectiveChecked = groupContext.value === value;
    } else if (isEffectiveChecked === undefined && type !== undefined) {
      isEffectiveChecked = type === 'checked';
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (effectiveDisabled) return;
      if (onChange) {
        onChange(e);
      }
      if (groupContext?.onChange && value !== undefined) {
        groupContext.onChange(value);
      }
    };

    const hasLabel = label !== undefined || children !== undefined;

    const classNames = [
      'radio',
      isEffectiveChecked ? 'radio--checked' : 'radio--unchecked',
      effectiveDisabled ? 'radio--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={classNames}>
        <input
          ref={ref}
          type="radio"
          className="radio__input"
          name={name}
          value={value}
          checked={isEffectiveChecked}
          defaultChecked={defaultChecked}
          disabled={effectiveDisabled}
          onChange={handleChange}
          id={id}
          {...rest}
        />
        <span className="radio__control" aria-hidden="true" />
        {hasLabel && (
          <span className="radio__label">{label ?? children}</span>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

/**
 * RadioGroup Component
 * 여러 Radio 버튼을 하나의 단일 선택 그룹으로 관리하는 컨테이너 컴포넌트입니다.
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  defaultValue,
  name,
  disabled = false,
  onChange,
  direction = 'vertical',
  children,
  className = '',
}) => {
  const [internalValue, setInternalValue] = React.useState<string | number | undefined>(defaultValue);

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (newValue: string | number) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const groupClasses = [
    'radio-group',
    `radio-group--${direction}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <RadioContext.Provider
      value={{
        name,
        value: currentValue,
        disabled,
        onChange: handleChange,
      }}
    >
      <div className={groupClasses} role="radiogroup">
        {children}
      </div>
    </RadioContext.Provider>
  );
};

RadioGroup.displayName = 'RadioGroup';
