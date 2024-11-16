# prodigy_wd_02

# Stopwatch Web Application

## Features

### 1. **Start/Pause Button**
   - **Functionality**: 
     - The "Start" button begins the stopwatch, and the button text changes to "Pause". 
     - When clicked again, the timer is paused, and the button text reverts to "Start".
   - **Keyboard Shortcut**: Press `1` on the keyboard to toggle between start and pause.

### 2. **Reset Button**
   - **Functionality**: 
     - The "Reset" button stops the stopwatch, clears the current time, and resets it to `00:00:00`. 
     - It also saves the current time in the "Previous Times" section before resetting.
   - **Keyboard Shortcut**: Press `2` on the keyboard or `Space` to reset the stopwatch.

### 3. **Lap Button**
   - **Functionality**: 
     - The "Lap" button records the current time as a lap and adds it to the "Lap Times" list. It allows users to track individual lap times while the stopwatch continues running.
   - **Keyboard Shortcut**: Press `3` on the keyboard to record a lap.

### 4. **Previous Times List**
   - **Functionality**: 
     - When the stopwatch is reset, the current time is saved in the "Previous Times" list. 
     - Each reset appends a new time to this list, providing a history of recorded times.
   - **Max History**: If 5 previous times are added, the list is cleared, and the count resets to start a new set of times.
   - **Indicator**: 
     - An indicator message appears when the previous times list is cleared after reaching 5 times.

### 5. **Glassmorphism Design**
   - The stopwatch container has a **Glassmorphism effect** with a semi-transparent background and blurred backdrop, giving the interface a modern and elegant look. 
   - The buttons match the color palette, enhancing the aesthetic.

### 6. **Keyboard Shortcuts**
   - Press `1` to toggle between Start and Pause.
   - Press `2` or `Space` to Reset the stopwatch.
   - Press `3` to record a Lap time.

---

## How to Use

1. **Start/Pause**: Click the **Start** button to begin the stopwatch, and click it again to pause the timer.
2. **Reset**: Click **Reset** to reset the stopwatch to `00:00:00` and save the time in the "Previous Times" section.
3. **Lap**: Click **Lap** to save the current time as a lap in the "Lap Times" list.
4. **Keyboard Shortcuts**: Use the keyboard for quick access:
   - `1` to Start/Pause the stopwatch.
   - `2` or `Space` to Reset the stopwatch.
   - `3` to record a Lap time.
5. ** can be used for speed timers for example while you are solving cube 
---

## Technologies Used

- **HTML**: Provides the structure for the web page.
- **CSS**: Used for styling, including implementing the glassmorphism effect.
- **JavaScript**: Powers the interactivity, timer functionality, and user input handling.

---

## Planned Features (Future Updates)

- **Export Lap Times**: Option to export recorded lap times to a file.
- **Dark Mode**: Support for dark mode to enhance visibility in low-light environments.
- **Customizable Timer**: Ability to customize the timer for hours, minutes, and seconds.
- ** moving gradient in a circle around a watch.

---

## License

This project is open source and available under the [MIT License](LICENSE).

