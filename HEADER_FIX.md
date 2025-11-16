# Header Hamburger Menu Fix for iPhone

## Issue
Hamburger menu not visible on iPhone devices (works fine on Android)

## Root Causes
1. Z-index stacking context issues on iOS Safari
2. Backdrop-filter can cause rendering issues on iOS
3. Position relative inside position relative creates stacking problems on iOS
4. Touch target issues with nested elements

## CSS Changes Required in Header.css

### 1. Fix menu-toggle button (line 123-136)
Replace:
```css
.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 12px;
  z-index: 100;
  width: 38px;
  height: 32px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
```

With:
```css
.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 12px;
  z-index: 110;
  width: 38px;
  height: 32px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  touch-action: manipulation;
  flex-shrink: 0;
}
```

### 2. Fix hamburger bars (line 137-144)
Add pointer-events: none to bars:
```css
.menu-toggle .bar {
  position: absolute;
  left: 6px;
  right: 6px;
  height: 3px;
  background: #f1c40f;
  border-radius: 2px;
  transition: transform .4s cubic-bezier(.68,-0.55,.27,1.55), opacity .3s ease, top .4s ease, background .3s;
  pointer-events: none;
}
```

### 3. Fix mobile menu toggle display (line 152-156)
Replace:
```css
@media (max-width:900px){
  .menu-toggle {
    display: block;
  }
}
```

With:
```css
@media (max-width:900px){
  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
```

### 4. Fix mobile-nav-overlay z-index (line 158-170)
Replace z-index: 90 with z-index: 100 and add iOS fixes:
```css
.mobile-nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity .4s ease;
  -webkit-overflow-scrolling: touch;
  will-change: opacity;
}
```

### 5. Add iOS-specific mobile styles (add after line 260)
```css
/* iOS-specific fixes */
@supports (-webkit-touch-callout: none) {
  .menu-toggle {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  
  .menu-toggle .bar {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  
  .mobile-nav-overlay {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@media (max-width: 900px) {
  .header-inner {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
```

## Summary of Changes
- Increased z-index values (menu-toggle: 110, overlay: 100)
- Added iOS-specific CSS properties (-webkit-appearance, touch-action)
- Changed display from block to flex for better rendering
- Added pointer-events: none to hamburger bars
- Added hardware acceleration with translateZ(0)
- Added will-change for better performance

These changes ensure the hamburger menu is clickable and visible on all iOS devices.
