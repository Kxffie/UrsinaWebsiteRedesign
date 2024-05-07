---
title: Downloading and Installing Ursina
---

Ursina is a Python-based game engine for creating 2D and 3D games and simulations. Follow these steps to download and install Ursina on your system:

## Step 1: Install Python

Ensure you have Python 3.10 or newer installed on your system. You can download and install Python from the [official website](https://www.python.org/downloads/).

## Step 2: Install Ursina using pip

Open your command prompt or terminal and type the following command to install Ursina using pip:

```bash
pip install ursina
```

### Installing the latest version from GitHub

If you want to install the newest version of Ursina directly from GitHub, you can use the following pip command:

```bash
pip install https://github.com/pokepetter/ursina/archive/master.zip --upgrade --force-reinstall
```

Keep in mind that installing from the latest GitHub version may introduce new features or changes that could potentially break existing code.

### Cloning the Git repository

For easy access to the source code and the ability to edit it, it's recommended to clone the Ursina Git repository. Ensure you have Git installed on your system from the [official Git website](https://git-scm.com/), then clone the repository and install it as a development package:

```bash
git clone https://github.com/pokepetter/ursina.git
cd ursina
python setup.py develop
```

## Step 3: Install optional dependencies

Ursina has optional dependencies that provide additional functionality. You can install specific optional dependencies using pip or install all of them at once:

```bash
pip install ursina[extras]
```

## Additional Notes

- On some systems, you might need to use pip3 instead of pip to ensure you're using Python 3 and not the older Python 2.
- If the pip command is not found, you can use python -m pip instead:

```bash
python -m pip install ursina
```

## Next Steps

If the installation process completed successfully, you can proceed to the introduction tutorial to learn how to create a basic program using Ursina and how to run it.

## Troubleshooting

```bash
ursina installed successfully, but python can't find it when I try to run a script
```

If you have multiple Python installs, make sure you installed ursina to the correct one.
You can specify which Python version to install to like this:

```bash
python3.10 -m pip install ursina
```

If you're using a venv, make sure you're installing it to the venv and not to the default location.
