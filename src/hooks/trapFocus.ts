/** @format */

import React from "react";

export const trapFocus = (
  e: React.KeyboardEvent,
  firstFocusableElement: HTMLElement,
  lastFocusableElement: HTMLElement
) => {
  if (e.key === "Tab") {
    if (e.shiftKey) {
      // if tabbing back and first focusable element in modal is reached, wrap back
      if (document.activeElement === firstFocusableElement) {
        e.preventDefault();
        return lastFocusableElement?.focus();
      }
    } else {
      // if tabbing forward and last focusable element in modal is reached, wrap forward
      if (document.activeElement === lastFocusableElement) {
        e.preventDefault();
        return firstFocusableElement?.focus();
      }
    }
  }
};
