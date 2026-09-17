import React, { useState, useRef, useEffect } from 'react';
import type { SelectProps, SelectOption } from './types';
import { Icon } from '../Icon';
import './select.css';

/**
 * Atelier Fashion Design System - Select Atom Component
 * 피그마 "00. Common Design System"의 Select 컴포넌트 100% 매핑
 *
 * - Class Name: `select`
 * - Size: `md` (40px) | `sm` (32px)
 * - State: `normal` | `active` | `disabled` | `readonly`
 * - Box: `true` (닫힌 트리거 형태) | `false` (펼쳐진 드롭다운 메뉴 형태)
 * - Option State: `normal` | `disabled` | `button` | `message`
 */
export const Select: React.FC<SelectProps> = ({
  size = 'md',
  state = 'normal',
  box = true,
  placeholder,
  value: controlledValue,
  defaultValue,
  options = [],
  open: controlledOpen,
  defaultOpen = false,
  headerTitle,
  disabled = false,
  readOnly = false,
  onChange,
  className = '',
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
  const [isOpenInternal, setIsOpenInternal] = useState<boolean>(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentValue = controlledValue !== undefined ? controlledValue : selectedValue;
  const isEffectiveOpen = controlledOpen !== undefined ? controlledOpen : isOpenInternal;

  const isEffectiveDisabled = disabled || state === 'disabled';
  const isEffectiveReadOnly = readOnly || state === 'readonly';

  // Determine effective trigger state
  let effectiveState = state;
  if (isEffectiveDisabled) {
    effectiveState = 'disabled';
  } else if (isEffectiveReadOnly) {
    effectiveState = 'readonly';
  } else if (currentValue) {
    effectiveState = 'active';
  }

  // Default placeholder per size
  const defaultPlaceholder = size === 'md' ? '선택해주세요' : '선택';
  const effectivePlaceholder = placeholder ?? defaultPlaceholder;

  // Selected option object
  const selectedOption = options.find((opt) => opt.value === currentValue);
  const displayLabel = selectedOption ? selectedOption.label : (currentValue ?? effectivePlaceholder);

  // Default header title for box=false / dropdown header
  const effectiveHeaderTitle = headerTitle ?? (size === 'md' ? '사이즈 선택' : '선택');

  // Icons based on size and open state
  const downIconName = size === 'md' ? 'arrow_down_24' : 'arrow_down_16';
  const upIconName = size === 'md' ? 'arrow_up_24' : 'arrow_up_16';
  const actionIconName = 'arrow_right_12';

  // Close dropdown when clicking outside (in box=true mode)
  useEffect(() => {
    if (!box || !isEffectiveOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (controlledOpen === undefined) {
          setIsOpenInternal(false);
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (controlledOpen === undefined) {
          setIsOpenInternal(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [box, isEffectiveOpen, controlledOpen]);

  // Toggle dropdown handler (opens/toggles from trigger button)
  const handleTriggerClick = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isEffectiveDisabled || isEffectiveReadOnly) return;
    if (controlledOpen === undefined) {
      setIsOpenInternal((prev) => !prev);
    }
  };

  // Close dropdown handler (when clicking header row while covering trigger)
  const handleHeaderClick = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isEffectiveDisabled || isEffectiveReadOnly) return;
    if (controlledOpen === undefined) {
      setIsOpenInternal(false);
    }
  };

  // Option selection handler
  const handleOptionClick = (option: SelectOption) => {
    if (option.disabled || option.state === 'disabled') return;

    if (controlledValue === undefined) {
      setSelectedValue(option.value);
    }

    if (onChange) {
      onChange(option.value, option);
    }

    if (box && controlledOpen === undefined) {
      setIsOpenInternal(false);
    }
  };

  // Container CSS class names
  const containerClasses = [
    'select',
    `select--${size}`,
    `select--${effectiveState}`,
    box ? 'select--box-true' : 'select--box-false',
    box && isEffectiveOpen ? 'select--open' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Dropdown list JSX
  const renderDropdownContent = () => (
    <div className="select__dropdown" role="listbox">
      {/* Header Row per Figma Spec ("사이즈 선택" / "선택" + arrow_up) */}
      <div
        className="select__header"
        role={box ? 'button' : undefined}
        tabIndex={box ? 0 : undefined}
        onClick={box ? handleHeaderClick : undefined}
        onKeyDown={
          box
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleHeaderClick();
                }
              }
            : undefined
        }
      >
        <span className="select__header-title">{effectiveHeaderTitle}</span>
        <span className="select__header-icon">
          <Icon name={upIconName} />
        </span>
      </div>

      {/* Options List */}
      <ul className="select__list">
        {options.map((option, idx) => {
          const isOptionDisabled = option.disabled || option.state === 'disabled';
          const optionStateClass = option.state ? `select__option--${option.state}` : 'select__option--normal';

          return (
            <li
              key={option.value || idx}
              className={`select__option ${optionStateClass}`}
              role="option"
              tabIndex={isOptionDisabled ? -1 : 0}
              aria-selected={option.value === currentValue}
              aria-disabled={isOptionDisabled}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => {
                if (!isOptionDisabled && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleOptionClick(option);
                }
              }}
            >
              {option.state === 'message' ? (
                <div className="select__option-content">
                  <div className="select__option-title">{option.label}</div>
                  {option.message && <div className="select__option-desc">{option.message}</div>}
                </div>
              ) : option.state === 'button' ? (
                <>
                  <span className="select__option-label">{option.label}</span>
                  <button
                    type="button"
                    className="select__option-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (option.onButtonClick) {
                        option.onButtonClick(e);
                      }
                    }}
                  >
                    <span>{option.buttonText || '재입고 알림'}</span>
                    <Icon name={actionIconName} />
                  </button>
                </>
              ) : (
                <span className="select__option-label">{option.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );

  // When box=false: Render static open dropdown menu directly (Figma spec view)
  if (!box) {
    return (
      <div ref={containerRef} className={containerClasses}>
        {renderDropdownContent()}
        {children}
      </div>
    );
  }

  // When box=true: Render closed trigger button + floating dropdown when open
  return (
    <div ref={containerRef} className={containerClasses}>
      <button
        type="button"
        className="select__trigger"
        disabled={isEffectiveDisabled}
        aria-haspopup="listbox"
        aria-expanded={isEffectiveOpen}
        onClick={handleTriggerClick}
      >
        <span className="select__label">{displayLabel}</span>
        <span className="select__icon">
          <Icon name={isEffectiveOpen ? upIconName : downIconName} />
        </span>
      </button>

      {isEffectiveOpen && renderDropdownContent()}
      {children}
    </div>
  );
};

Select.displayName = 'Select';
