import { forwardRef, createContext, useContext, useState } from 'react';
import type { MouseEvent } from 'react';
import type { ChipProps, ChipGroupProps } from './types';
import { Icon } from '../Icon/Icon';
import './chip.css';

interface ChipContextValue {
  values: (string | number)[];
  multiple: boolean;
  disabled?: boolean;
  onToggle: (val: string | number) => void;
}

const ChipContext = createContext<ChipContextValue | null>(null);

/**
 * Atelier Fashion Design System - Chip Component
 * 피그마 "00. Common Design System"의 Chip 원자 단위 컴포넌트입니다.
 *
 * - Class Name: `chip`
 * - Type: `unchecked` (default) | `checked`
 * - Disabled: `false` (default) | `true`
 * - Icon: `false` (default) | `true` (기본값: alarm_12)
 */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      type,
      checked: controlledChecked,
      defaultChecked = false,
      disabled: explicitDisabled = false,
      icon,
      iconPosition = 'left',
      label,
      value,
      onToggle,
      onChange,
      onClick,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const groupContext = useContext(ChipContext);
    const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(defaultChecked);

    const isGroupDisabled = groupContext?.disabled ?? false;
    const effectiveDisabled = explicitDisabled || isGroupDisabled;

    // Determine checked state
    let isEffectiveChecked = false;
    if (groupContext && value !== undefined) {
      isEffectiveChecked = groupContext.values.includes(value);
    } else if (controlledChecked !== undefined) {
      isEffectiveChecked = controlledChecked;
    } else if (type !== undefined) {
      isEffectiveChecked = type === 'checked';
    } else {
      isEffectiveChecked = uncontrolledChecked;
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (effectiveDisabled) return;

      onClick?.(e);

      const nextChecked = !isEffectiveChecked;
      if (controlledChecked === undefined && !groupContext) {
        setUncontrolledChecked(nextChecked);
      }

      onToggle?.(nextChecked);
      onChange?.(nextChecked);

      if (groupContext && value !== undefined) {
        groupContext.onToggle(value);
      }
    };

    const classNames = [
      'chip',
      isEffectiveChecked ? 'chip--checked' : 'chip--unchecked',
      effectiveDisabled ? 'chip--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Render Icon
    const renderIcon = () => {
      if (!icon) return null;
      if (typeof icon === 'boolean') {
        return (
          <span className="chip__icon" aria-hidden="true">
            <Icon name="alarm_12" size={12} />
          </span>
        );
      }
      return <span className="chip__icon" aria-hidden="true">{icon}</span>;
    };

    const content = label !== undefined ? label : children;

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        disabled={effectiveDisabled}
        onClick={handleClick}
        aria-pressed={isEffectiveChecked}
        aria-disabled={effectiveDisabled}
        {...rest}
      >
        {iconPosition === 'left' && renderIcon()}
        {content !== undefined && <span className="chip__label">{content}</span>}
        {iconPosition === 'right' && renderIcon()}
      </button>
    );
  }
);

Chip.displayName = 'Chip';

/**
 * Atelier Fashion Design System - ChipGroup Component
 * 카테고리/필터 칩 그룹 관리를 위한 컨테이너 컴포넌트입니다.
 */
export const ChipGroup: React.FC<ChipGroupProps> = ({
  value: controlledValue,
  defaultValue,
  multiple = true,
  disabled = false,
  onChange,
  children,
  className = '',
}) => {
  const getInitialValues = (): (string | number)[] => {
    const val = controlledValue ?? defaultValue;
    if (val === undefined) return [];
    return Array.isArray(val) ? val : [val];
  };

  const [internalValues, setInternalValues] = useState<(string | number)[]>(getInitialValues);

  const effectiveValues = ((): (string | number)[] => {
    if (controlledValue === undefined) return internalValues;
    return Array.isArray(controlledValue) ? controlledValue : [controlledValue];
  })();

  const handleToggle = (val: string | number) => {
    let nextValues: (string | number)[];

    if (multiple) {
      if (effectiveValues.includes(val)) {
        nextValues = effectiveValues.filter((v) => v !== val);
      } else {
        nextValues = [...effectiveValues, val];
      }
    } else {
      nextValues = effectiveValues.includes(val) ? [] : [val];
    }

    if (controlledValue === undefined) {
      setInternalValues(nextValues);
    }

    if (onChange) {
      onChange(multiple ? nextValues : (nextValues[0] ?? null));
    }
  };

  const contextValue: ChipContextValue = {
    values: effectiveValues,
    multiple,
    disabled,
    onToggle: handleToggle,
  };

  const groupClassNames = ['chip-group', className].filter(Boolean).join(' ');

  return (
    <ChipContext.Provider value={contextValue}>
      <div className={groupClassNames} role="group">
        {children}
      </div>
    </ChipContext.Provider>
  );
};

ChipGroup.displayName = 'ChipGroup';
