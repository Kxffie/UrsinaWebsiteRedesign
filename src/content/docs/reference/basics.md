---
title: Basics of Ursina Engine
sidebar:
  order: 1
---

## Main Import: `ursina/main`

The main import, `ursina/main`, provides essential functionalities and configurations to kickstart your project. It initializes the Ursina application with customizable options such as title, icon, window settings, and more.

### Importing Ursina

You can import the main import using the following import statement:

```python
from ursina import *
```

### Parameters

- **`Ursina(title='ursina', icon='textures/ursina.ico', borderless=True, fullscreen=False, size=None, forced_aspect_ratio=None, position=None, vsync=True, editor_ui_enabled=True, window_type='onscreen', development_mode=True, render_mode=None, show_ursina_splash=False, **kwargs)`**: This function initializes the Ursina application with various parameters to customize the application window and behavior.

- **Parameters include:**
  - `title`: The title of the application window.
  - `icon`: Path to the icon file for the application window.
  - `borderless`: If `True`, the window will be borderless.
  - `fullscreen`: If `True`, the window will be fullscreen.
  - `size`: Tuple specifying the size of the window.
  - `forced_aspect_ratio`: Aspect ratio to enforce for the window.
  - `position`: Tuple specifying the initial position of the window.
  - `vsync`: If `True`, the application will synchronize with the vertical refresh rate.
  - `editor_ui_enabled`: If `True`, the in-game editor UI will be enabled.
  - `window_type`: Type of the window ('onscreen', 'fullscreen', etc.).
  - `development_mode`: If `True`, the application is in development mode.
  - `render_mode`: Rendering mode for the application.
  - `show_ursina_splash`: If `True`, the Ursina splash screen will be displayed.
  - `**kwargs`: Additional keyword arguments for customization.

### Properties

- **`mouse`**: The `mouse` object provides access to mouse input functionalities, allowing interaction with the application.


### Functions

  - `input_up(key, is_raw=False)`: Internal method for handling key release events.
  - `input_hold(key, is_raw=False)`: Internal method for handling repeated input when a key is held.
  - `input(key, is_raw=False)`: Internal method for handling input events.
  - `text_input(key)`: Internal method for handling text input events.
  - `step()`: Allows manual control of the update loop.
  - `run(info=True)`: Starts the Ursina application.

### **Main Import Example**

```python
from ursina import *

# Initialize Ursina application
app = Ursina(use_ingame_console=True)

# Define input function
def input(key):
    print(key)

# Run the application
app.run()
```

---

## Button Prefab

The `Button` prefab in Ursina is a specialized entity designed for creating interactive buttons in 2D or UI space. It inherits from the `Entity` class and provides additional functionality for handling mouse input and button events.

### Importing the Button Prefab

You can import the `Button` prefab using the following import statement:

```python
from ursina.prefabs.button import Button
```

### Parameters

- **text**: The text displayed on the button.
- **parent**: The parent entity of the button. By default, the button is attached to the UI space (`camera.ui`).
- **model**: The model used for the button's visual representation.
- **radius**: The radius of the button's collider.
- **origin**: The origin point of the button.
- **text_origin**: The origin point of the button's text.
- **text_size**: The size of the button's text.
- **color**: The color of the button.
- **collider**: The type of collider used for the button.
- **highlight_scale**: The scale multiplier applied when the button is highlighted.
- **pressed_scale**: The scale multiplier applied when the button is pressed.
- **disabled**: Boolean indicating whether the button is disabled.
- `**kwargs`: Additional keyword arguments for customization.

### Properties

- **.text**: The text displayed on the button.
- **.text_origin**: The origin point of the button's text.
- **.text_color**: The color of the button's text.
- **.icon**: The icon displayed on the button.
- **.icon_world_scale**: The world scale of the button's icon.
- **.text_size**: The size of the button's text.
- **.origin**: The origin point of the button.

### Functions

- **input(key)**: Handles keyboard input events.
- **on_mouse_enter()**: Called when the mouse enters the button.
- **on_mouse_exit()**: Called when the mouse exits the button.
- **fit_to_text(radius=.1, padding=Vec2(Text.size*1.5, Text.size))**: Resizes the button to fit its text content.

### Example Usage

```python
from ursina import *

# Initialize Ursina application
app = Ursina()

# Create a button
b = Button(text='Click me!', scale=.25)

# Define button behavior
def on_click():
    print('Button clicked!')

b.on_click = on_click  # Assign a function to the button's click event

# Run the application
app.run()
```

---

## Entity Class

The `Entity` class in Ursina represents a game object or entity within the game world. It provides various properties and functions for manipulating and interacting with entities.

### Creating Entities

To generate entities in your Ursina game, you can use the `Entity` class. This class allows you to create versatile game objects with customizable properties and behaviors. Below is a step-by-step guide on how to generate entities:

1. **Import the Entity Class**: Ensure you have the Entity class available by importing it from Ursina.
   ```python
   from ursina import Entity
   ```

2. **Create an Instance of Entity**: You can create an entity by instantiating the `Entity` class. You can specify various parameters such as `model`, `color`, `position`, etc.
   ```python
   entity = Entity(model='cube', color=color.white, position=(0,0,0))
   ```

3. **Customize the Entity**: After creating an entity, you can further customize it by setting its properties. For example, you can change its scale, rotation, or add a texture.
   ```python
   entity.scale = (2, 2, 2)
   entity.rotation_y = 45
   entity.texture = 'brick'
   ```

4. **Add Functionality**: Entities can have behaviors defined by attaching scripts or using built-in methods. For example, you can make an entity rotate continuously.
   ```python
   def update():
       entity.rotation_y += 1
   ```

5. **Organize Entities**: You can organize entities by setting parents or grouping them into scenes.
   ```python
   another_entity = Entity(parent=entity)
   ```

6. **Interact with Entities**: Entities can interact with user inputs or other game elements. Define functions to handle these interactions.
   ```python
   def input(key):
       if key == 'space':
           entity.enabled = not entity.enabled  # Toggle entity visibility
   ```

### Parameters

- **`Entity(add_to_scene_entities=True, enabled=True, **kwargs)`**: Initializes an entity with customizable options and attributes.

- `add_to_scene_entities`: Boolean indicating whether to add the entity to the scene entities.
- `enabled`: Boolean indicating whether the entity is initially enabled.
- `**kwargs`: Additional keyword arguments for customization.


### Properties

  - `.enabled`: Disables or enables the entity. Disabled entities are not visible nor run code.
  - `.model`: Sets the model of the entity.
  - `.color`: Sets the color of the entity.
  - `.eternal`: Determines if the entity is eternal and does not get destroyed on scene clear.
  - `.parent`: Sets the parent of the entity.
  - `.position`: Sets the position of the entity.
  - `.rotation`: Sets the rotation of the entity.
  - `.scale`: Sets the scale of the entity.
  - Other properties for position, rotation, scale, visibility, collision, shader, material, texture, etc.

### Functions
  - `enable()`: Enables the entity.
  - `disable()`: Disables the entity.
  - `add_script(class_instance)`: Adds a script to the entity.
  - Other functions for setting shader inputs, generating maps, animation, rotation, shaking, fading, blinking, and intersection checks.

### Example Usage

```python
from ursina import *

app = Ursina()

# Create an entity
e = Entity(model='quad', color=color.orange, position=(0, 0, 1), scale=1.5, rotation=(0, 0, 45), texture='brick')

# Example of inheriting Entity
class Player(Entity):
    def __init__(self, **kwargs):
        super().__init__()
        self.model = 'cube'
        self.color = color.red
        self.scale_y = 2

        for key, value in kwargs.items():
            setattr(self, key, value)

    def input(self, key):
        if key == 'space':
            self.animate_x(2, duration=1)

    def update(self):
        self.x += held_keys['d'] * time.dt * 10
        self.x -= held_keys['a'] * time.dt * 10

# Create a player entity
player = Player(x=-1)
```

---

## Sprite Class

The `Sprite` class in Ursina is a specialized entity designed for creating interactive buttons in 2D or UI space. It inherits from the `Entity` class and provides additional functionality for handling mouse input and button events.


### Creating Sprites

To create sprites in Ursina, you first need to import the `Sprite` class from the `ursina` package. Sprites are useful for 2D games and UI elements. Here's a simple example of how to import and create a sprite:

```python
from ursina import Sprite

# Create a sprite for a button
button_sprite = Sprite(
    model='quad',
    texture='button_texture',
    position=(0.5, 0.5),
    scale=(0.2, 0.1)
)

# Define what happens when the sprite is clicked
def on_click():
    print("Button clicked!")

button_sprite.on_click = on_click
```

### Properties

- `ppu`: Pixels per unit for scaling the sprite.
- `model`: The model used for rendering the sprite (default is 'quad').
- `texture`: The texture applied to the sprite.
- `aspect_ratio`: The aspect ratio of the sprite, calculated based on the texture dimensions.
- `scale_x`: The horizontal scale of the sprite, calculated based on the aspect ratio and the vertical scale (scale_y).

### Example Usage

```python
from ursina import *

# Initialize Ursina application
app = Ursina()

# Set camera properties
camera.orthographic = True
camera.fov = 1

# Set pixels per unit for scaling
Sprite.ppu = 16

# Disable default texture filtering
Texture.default_filtering = None

# Create a sprite with texture 'brick' and disable filtering
s = Sprite('brick', filtering=False)

# Run the application
app.run()
```

---

## Text Class

### Creating Text

To create text in Ursina, you can use the `Text` class which provides a flexible way to display and format text in your application. Here's a step-by-step guide on how to create and customize text:

1. **Import the Text Class**
   First, ensure that you have imported the `Text` class from Ursina.

   ```python
   from ursina import Text
   ```

2. **Create an Instance of Text**
   You can create a text entity by instantiating the `Text` class. You can specify the content of the text and various other properties at the time of creation.

   ```python
   example_text = Text(text='Hello, Ursina!')
   ```

3. **Customize Text Properties**
   The `Text` class offers various properties to customize the appearance and behavior of the text. For example, you can set the font size, color, and alignment.

   ```python
   example_text.size = 0.05
   example_text.color = color.azure
   example_text.x = -0.5  # Position the text on the x-axis
   ```

4. **Add Text to the Scene**
   Once the text is configured, it is automatically added to the scene. However, you can explicitly define its parent if needed.

   ```python
   example_text.parent = camera.ui
   ```

5. **Using Tags for Formatting**
   If you want to use formatted text with tags, ensure `use_tags` is set to `True` and define your tags.

   ```python
   example_text.text = 'Hello, <red>Ursina</red>!'
   example_text.use_tags = True
   ```

6. **Animating Text**
   You can animate the text to appear using the `appear` method which makes the text appear character by character.

   ```python
   example_text.appear(speed=0.05)
   ```

### Parameters

- **`Text(text='', start_tag=start_tag, end_tag=end_tag, ignore=True, **kwargs)`**: Initializes a text entity with optional parameters such as the text content, start and end tags for formatting, and additional keyword arguments.

### Properties

- **`size`**: The size of the text.
- **`parent`**: The parent entity of the text (default is `camera.ui`).
- **`shader`**: The shader applied to the text.
- **`text_nodes`**: List of text nodes.
- **`images`**: List of images in the text.
- **`origin`**: The origin point of the text.
- **`font`**: The font used for the text.
- **`resolution`**: The resolution of the text.
- **`use_tags`**: If `True`, tags are used for text formatting.
- **`line_height`**: The height of each line of text.
- **`start_tag`**: The start tag for formatting.
- **`end_tag`**: The end tag for formatting.
- **`text_colors`**: Dictionary containing text colors.
- **`tag`**: The combined start and end tag.
- **`current_color`**: The current text color.
- **`scale_override`**: Scale override for the text.
- **`appear_sequence`**: Sequence for appearing text.

### Functions

- **`text(text)`**: Sets the text content.
- **`create_text_section(text, tag='', x=0, y=0)`**: Creates a text section with optional tag and position.
- **`align()`**: Aligns the text.
- **`create_background(padding=size*2, radius=size, color=ursina.color.black66)`**: Creates a background for the text.
- **`appear(speed=.025)`**: Animates the text to appear.
- **`get_width(string, font=None)`**: Gets the width of a string.

### Usage Example

   To create and manipulate text in Ursina, you can follow this simple example:

   ```python
   from ursina import *

   # Create an Ursina application
   app = Ursina()

   # Create a Text entity
   example_text = Text(text='Welcome to Ursina!')

   # Set properties
   example_text.size = 0.05
   example_text.color = color.azure
   example_text.x = -0.5  # Position on the x-axis
   example_text.y = 0.2   # Position on the y-axis

   # Use tags for formatted text
   example_text.text = 'Welcome to <red>Ursina</red>!'
   example_text.use_tags = True

   # Animate the text
   example_text.appear(speed=0.05)

   # Run the application
   app.run()
   ```
---

## Audio Class

### Creating Audio

To import audio in Ursina, you can use the `Audio` class provided by the engine. This class allows you to manage and control audio files within your application. Here's a step-by-step guide on how to import and use audio:

1. **Import the Audio Class**
   First, ensure that you have imported the `Audio` class from Ursina.

   ```python
   from ursina import Audio
   ```

2. **Create an Instance of Audio**
   You can create an audio object by instantiating the `Audio` class. You need to specify the path to your audio file. Optionally, you can set other parameters like volume, pitch, and loop.

   ```python
   background_music = Audio('path_to_music.mp3', loop=True, autoplay=True)
   ```

3. **Control Audio Playback**
   After creating an audio object, you can control its playback using methods like `play()`, `pause()`, and `stop()`.

   ```python
   background_music.play()
   background_music.pause()
   background_music.stop()
   ```

4. **Adjust Audio Properties**
   You can adjust properties such as volume and pitch at runtime.

   ```python
   background_music.volume = 0.5  # Set volume to 50%
   background_music.pitch = 1.2   # Increase pitch
   ```

This setup allows you to integrate and control audio within your Ursina applications effectively.


### Parameters

- **`Audio(sound_file_name='', volume=1, pitch=1, balance=0, loop=False, loops=1, autoplay=True, auto_destroy=False, **kwargs)`**: Initializes an audio entity with optional parameters such as the sound file name, volume, pitch, balance, loop settings, autoplay, auto_destroy, and additional keyword arguments.

### Properties

- **`volume`**: The volume of the audio.
- **`pitch`**: The pitch of the audio.
- **`loop`**: If `True`, the audio will loop.
- **`loops`**: The number of times the audio will loop.
- **`clip`**: The sound file name.
- **`length`**: The duration of the audio clip.
- **`status`**: The status of the audio (playing, paused, stopped).
- **`ready`**: If `True`, the audio is ready to play.
- **`playing`**: If `True`, the audio is currently playing.
- **`time`**: The current time position of the audio.
- **`balance`**: The balance of the audio (panning). Should be a value between -0.5 and 0.5.

### Functions

- **`play(start=0)`**: Plays the audio from the specified start time.
- **`pause()`**: Pauses the audio.
- **`resume()`**: Resumes the audio from the paused state.
- **`stop(destroy=True)`**: Stops the audio. If `destroy` is `True`, the audio entity is destroyed.
- **`fade(value, duration=.5, delay=0, curve=curve.in_expo, resolution=None, interrupt=True)`**: Fades the volume of the audio to the specified value over a duration.
- **`fade_in(value=1, duration=.5, delay=0, curve=curve.in_expo, resolution=None, interrupt='finish')`**: Fades in the volume of the audio.
- **`fade_out(value=0, duration=.5, delay=0, curve=curve.in_expo, resolution=None, interrupt='finish')`**: Fades out the volume of the audio.

### Usage Example

```python
from ursina import *

# Initialize Ursina application
app = Ursina()

# Load an audio file
background_music = Audio('background_music.mp3', loop=True, autoplay=True)

# Function to control audio
def input(key):
    if key == 'p':
        background_music.play()
    elif key == 's':
        background_music.stop()
    elif key == 'space':
        if background_music.playing:
            background_music.pause()
        else:
            background_music.resume()

# Run the application
app.run()
```