---
title: Building
sidebar:
    order: 1
---

### Using ursina.build

To build your Ursina application, open the command prompt in your project folder and run the following command:

```bash
python -m ursina.build
```


This command will move the necessary files to a 'build' directory, which you can then distribute.

### Command Options

- `--ignore`: Add assets to ignore.
- `--name`: Change the project name.
- `--include_modules`: Include extra modules like this: `--include_modules module_one,module_two,module_three`.
- `--overwrite`: Don't ask to overwrite existing builds, just overwrite.
- `--skip_engine`: Skip copying the Ursina game engine files.
- `--skip_game`: Skip copying game scripts and assets.
- `--compile_to_pyc=True`: Compile Python files to bytecode (default).
- `--compile_to_pyc=False`: Do not compile Python files to bytecode.

Ensure to include any extra modules with `--include_modules PIL,numpy`, for example. Any errors that occur while the application is running will be logged in `log.txt` instead of the console.

---

## Building with Nuitka

Follow the instructions on [Nuitka's website](https://nuitka.net/).

---

## Building Your App with auto-py-to-exe

Please note that this method is not recommended due to slower performance and larger file sizes.

1. Install `auto-py-to-exe` using pip: `pip install auto-py-to-exe`.
2. Open the command prompt and type `auto-py-to-exe` to open the GUI.
3. Enter the script location.
4. Select 'onefile'.
5. Choose either console-based or window-based.
6. Optionally, select an icon.
7. Under additional files, click 'Add folder' and add the following:
    - `panda3d-1.10.6.dist-info`
    - `panda3d`
    - `direct`
    - `ursina-3.1.0.dist-info`
    - `ursina`
    - Add any other files included for your app/game. You can find these in `YOUR_PYTHON_FOLDER/Lib/site-packages/`.
8. Navigate to "Advanced" > "–paths" and add the folder `YOUR_PYTHON_FOLDER/Lib/site-packages/panda3d`.
9. Optionally, set an output location.
10. Finally, click "Convert .py to .exe".
