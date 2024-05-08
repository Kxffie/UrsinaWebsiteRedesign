---
title: Basics of Ursina Engine
sidebar:
  order: 1
---

## Main Import: <span class="syntax">ursina/main</span>

The main import, <span class="syntax">ursina/main</span>, provides essential functionalities and configurations to kickstart your project. It initializes the Ursina application with customizable options such as title, icon, window settings, and more.

### Importing Ursina

You can import the main import using the following import statement:

```python
from ursina import *
```

### Parameters

```python
Ursina(title='ursina', icon='textures/ursina.ico', borderless=True,
   fullscreen=False, size=None, forced_aspect_ratio=None,
   position=None, vsync=True, editor_ui_enabled=True,
   window_type='onscreen', development_mode=True, render_mode=None,
   show_ursina_splash=False, **kwargs
)

# This function initializes the Ursina application with various 
# parameters to customize the application window and behavior.
```

- **Parameters include:**
  - <span class="parameters">title</span>: The title of the application window.
  - <span class="parameters">icon</span>: Path to the icon file for the application window.
  - <span class="parameters">borderless</span>: If <span class="boolean">True</span>, the window will be borderless.
  - <span class="parameters">fullscreen</span>: If <span class="boolean">True</span>, the window will be fullscreen.
  - <span class="parameters">size</span>: Tuple specifying the size of the window.
  - <span class="parameters">forced_aspect_ratio</span>: Aspect ratio to enforce for the window.
  - <span class="parameters">position</span>: Tuple specifying the initial position of the window.
  - <span class="parameters">vsync</span>: If <span class="boolean">True</span>, the application will synchronize with the vertical refresh rate.
  - <span class="parameters">editor_ui_enabled</span>: If <span class="boolean">True</span>, the in-game editor UI will be enabled.
  - <span class="parameters">window_type</span>: Type of the window (<span class="string">'onscreen'</span>, <span class="string">'fullscreen'</span>, etc.).
  - <span class="parameters">development_mode</span>: If <span class="boolean">True</span>, the application is in development mode.
  - <span class="parameters">render_mode</span>: Rendering mode for the application.
  - <span class="parameters">show_ursina_splash</span>: If <span class="boolean">True</span>, the Ursina splash screen will be displayed.
  - <span class="parameters">**kwargs</span>: Additional keyword arguments for customization.

### Properties

- <span class="properties">.mouse</span>: The <span class="syntax">mouse</span> object provides access to mouse input functionalities, allowing interaction with the application.

### Functions

- <span class="function">input_up</span>(<span class="syntax">key</span>, <span class="syntax">is_raw</span>=<span class="boolean">False</span>): Internal method for handling key release events.
- <span class="function">input_hold</span>(<span class="syntax">key</span>, <span class="syntax">is_raw</span>=<span class="boolean">False</span>): Internal method for handling repeated input when a key is held.
- <span class="function">input</span>(<span class="syntax">key</span>, <span class="syntax">is_raw</span>=<span class="boolean">False</span>): Internal method for handling input events.
- <span class="function">text_input</span>(<span class="syntax">key</span>): Internal method for handling text input events.
- <span class="function">step</span>(): Allows manual control of the update loop.
- <span class="function">run</span>(info=<span class="boolean">True</span>): Starts the Ursina application.

### Example

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

## Entity

The <span class="entity">Entity</span> class in Ursina represents objects in the game world. It provides properties and functions for managing various aspects of entities.

### Attributes

- <span class="parameters">.rotation_directions</span>: Tuple representing the direction of rotation along the x, y, and z axes.
- <span class="parameters">.name</span>: Name of the entity.
- <span class="parameters">.ignore</span>: If <span class="boolean">True</span>, the entity will not try to run code.
- <span class="parameters">.ignore_paused</span>: If <span class="boolean">True</span>, the entity will still run when the application is paused.
- <span class="parameters">.ignore_input</span>: If <span class="boolean">True</span>, the entity will ignore input.
- <span class="parameters">.parent</span>: Parent entity of the current entity.
- <span class="parameters">.add_to_scene_entities</span>: If <span class="boolean">True</span>, the entity will be added to the scene entities.
- <span class="parameters">.scripts</span>: List of scripts attached to the entity.
- <span class="parameters">.animations</span>: List of animations applied to the entity.
- <span class="parameters">.hovered</span>: If <span class="boolean">True</span>, the mouse is hovering over the entity.
- <span class="parameters">.enabled</span>: If <span class="boolean">True</span>, the entity is enabled.

### Properties

- <span class="properties">.enabled</span>: Disabled entities will not be visible nor run code.
- <span class="properties">.model</span>: Model of the entity.
- <span class="properties">.color</span>: Color of the entity.
- <span class="properties">.eternal</span>: If <span class="boolean">True</span>, the entity does not get destroyed on scene.clear().
- <span class="properties">.double_sided</span>: If <span class="boolean">True</span>, the entity is double-sided.
- <span class="properties">.render_queue</span>: Render queue for custom sorting.
- <span class="properties">.parent</span>: Parent entity of the entity.
- <span class="properties">.world_parent</span>: Parent entity of the entity in world space.
- <span class="properties">.types</span>: List of class names including inherited ones.
- <span class="properties">.visible</span>: If <span class="boolean">True</span>, the entity is visible.
- <span class="properties">.collider</span>: Collider type of the entity.
- <span class="properties">.collision</span>: If <span class="boolean">True</span>, collision is enabled.
- <span class="properties">.on_click</span>: Function to execute on click event.
- <span class="properties">.origin</span>: Origin of the entity.
- <span class="properties">.position</span>: Position of the entity.
- <span class="properties">.rotation</span>: Rotation of the entity.
- <span class="properties">.quaternion</span>: Quaternion rotation of the entity.
- <span class="properties">.scale</span>: Scale of the entity.
- <span class="properties">.transform</span>: Get/set position, rotation, and scale of the entity.
- <span class="properties">.forward</span>, <span class="properties">.back</span>, <span class="properties">.right</span>, <span class="properties">.left</span>, <span class="properties">.up</span>, <span class="properties">.down</span>: Direction vectors.
- <span class="properties">.screen_position</span>: Screen position of the entity.
- <span class="properties">.shader</span>: Shader of the entity.
- <span class="properties">.texture</span>: Texture of the entity.
- <span class="properties">.alpha</span>: Transparency/opacity of the entity.
- <span class="properties">.always_on_top</span>: If <span class="boolean">True</span>, the entity is always on top.
- <span class="properties">.unlit</span>: If <span class="boolean">True</span>, the entity is unlit.
- <span class="properties">.billboard</span>: If <span class="boolean">True</span>, the entity is billboard.
- <span class="properties">.wireframe</span>: If <span class="boolean">True</span>, render the entity as wireframe.
- <span class="properties">.attributes</span>: Attribute names of the entity.

### Functions

- <span class="function">.enable()</span>: Enable the entity.
- <span class="function">.disable()</span>: Disable the entity.
- <span class="function">.get_shader_input(name)</span>: Get the shader input value.
- <span class="function">.set_shader_input(name, value)</span>: Set the shader input value.
- <span class="function">.look_at(target)</span>: Rotate the entity to look at the target.
- <span class="function">.shake(duration, magnitude, speed, direction)</span>: Shake the entity.
- <span class="function">.intersects(traverse_target)</span>: Check if the entity intersects with another entity.

### Example

```python
from ursina import *

app = Ursina()

e = Entity(model='quad', color=color.orange, position=(0,0,1), scale=1.5, rotation=(0,0,45), texture='brick')

'''Example of inheriting Entity'''
class Player(Entity):
    def __init__(self, **kwargs):
        super().__init__()
        self.model='cube'
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

player = Player(x=-1)
```

---

## Button Prefab

The <span class="syntax">Button</span> prefab in Ursina is a specialized entity designed for creating interactive buttons in 2D or UI space. It inherits from the <span class="syntax">Entity</span> class and provides additional functionality for handling mouse input and button events.

### Importing the Button Prefab

You can import the <span class="syntax">Button</span> prefab using the following import statement:

```python
from ursina.prefabs.button import Button
```

### Parameters

```python
Button(text='', parent=camera.ui, model='quad', radius=.25, 
    origin=(-.5, .5), text_origin=(0,0), text_size=1, 
    color=color.white66, collider='box', highlight_scale=.02, 
    pressed_scale=.9, disabled=False, **kwargs
)

# This function initializes the Button class with various 
# parameters to customize the application window and behavior.
```

- <span class="parameters">text</span>: The text displayed on the button.
- <span class="parameters">parent</span>: The parent entity of the button. By default, the button is attached to the UI space (<span class="boolean">camera.ui</span>).
- <span class="parameters">model</span>: The model used for the button's visual representation.
- <span class="parameters">radius</span>: The radius of the button's collider.
- <span class="parameters">origin</span>: The origin point of the button.
- <span class="parameters">text_origin</span>: The origin point of the button's text.
- <span class="parameters">text_size</span>: The size of the button's text.
- <span class="parameters">color</span>: The color of the button.
- <span class="parameters">collider</span>: The type of collider used for the button.
- <span class="parameters">highlight_scale</span>: The scale multiplier applied when the button is highlighted.
- <span class="parameters">pressed_scale</span>: The scale multiplier applied when the button is pressed.
- <span class="parameters">disabled</span>: Boolean indicating whether the button is disabled.
- <span class="parameters">**kwargs</span>: Additional keyword arguments for customization.

### Properties

- <span class="properties">.text</span>: The text displayed on the button.
- <span class="properties">.text_origin</span>: The origin point of the button's text.
- <span class="properties">.text_color</span>: The color of the button's text.
- <span class="properties">.icon</span>: The icon displayed on the button.
- <span class="properties">.icon_world_scale</span>: The world scale of the button's icon.
- <span class="properties">.text_size</span>: The size of the button's text.
- <span class="properties">.origin</span>: The origin point of the button.

### Functions

- <span class="function">input</span>(<span class="syntax">key</span>): Handles keyboard input events.
- <span class="function">on_mouse_enter</span>(): Called when the mouse enters the button.
- <span class="function">on_mouse_exit</span>(): Called when the mouse exits the button.
- <span class="function">fit_to_text</span>(<span class="syntax">radius</span>=<span class="number">.1</span>, <span class="syntax">padding</span>=<span class="function">Vec2</span>(Text.size*<span class="number">1.5</span>, Text.size)): Resizes the button to fit its text content.

### Example

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

## Sprite Class

The <span class="syntax">Sprite</span> class in Ursina is a specialized entity designed for creating interactive buttons in 2D or UI space. It inherits from the <span class="syntax">Entity</span> class and provides additional functionality for handling mouse input and button events.

### Creating Sprites

To create sprites in Ursina, you first need to import the <span class="syntax">Sprite</span> class from the <span class="syntax">ursina</span> package. Sprites are useful for 2D games and UI elements. Here's a simple example of how to import and create a sprite:

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

- <span class="properties">ppu</span>: Pixels per unit for scaling the sprite.
- <span class="properties">model</span>: The model used for rendering the sprite (default is <span class="string">'quad'</span>).
- <span class="properties">texture</span>: The texture applied to the sprite.
- <span class="properties">aspect_ratio</span>: The aspect ratio of the sprite, calculated based on the texture dimensions.
- <span class="properties">scale_x</span>: The horizontal scale of the sprite, calculated based on the aspect ratio and the vertical scale (<span class="boolean">scale_y</span>).

### Example

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

To create text in Ursina, you can use the <span class="syntax">Text</span> class which provides a flexible way to display and format text in your application. Here's a step-by-step guide on how to create and customize text:

1. <span class="properties">Import the Text Class</span>
   First, ensure that you have imported the <span class="syntax">Text</span> class from Ursina.

   ```python
   from ursina import Text
   ```

2. <span class="properties">Create an Instance of Text</span>
   You can create a text entity by instantiating the <span class="syntax">Text</span> class. You can specify the content of the text and various other properties at the time of creation.

   ```python
   example_text = Text(text='Hello, Ursina!')
   ```

3. <span class="properties">Customize Text Properties</span>
   The <span class="syntax">Text</span> class offers various properties to customize the appearance and behavior of the text. For example, you can set the font size, color, and alignment.

   ```python
   example_text.size = 0.05
   example_text.color = color.azure
   example_text.x = -0.5  # Position the text on the x-axis
   ```

4. <span class="properties">Add Text to the Scene</span>
   Once the text is configured, it is automatically added to the scene. However, you can explicitly define its parent if needed.

   ```python
   example_text.parent = camera.ui
   ```

5. <span class="properties">Using Tags for Formatting</span>
   If you want to use formatted text with tags, ensure <span class="syntax">use_tags</span> is set to <span class="boolean">True</span> and define your tags.

   ```python
   example_text.text = 'Hello, <red>Ursina</red>!'
   example_text.use_tags = True
   ```

6. <span class="properties">Animating Text</span>
   You can animate the text to appear using the <span class="syntax">appear</span> method which makes the text appear character by character.

   ```python
   example_text.appear(speed=0.05)
   ```

### Parameters

```python
Text(text='', start_tag='<', end_tag='>', ignore=True, **kwargs)

# Initializes a text entity with optional parameters such as 
# the text content, start and end tags for formatting, and 
# additional keyword arguments.
```

### Properties

- <span class="properties">size</span>: The size of the text.
- <span class="properties">parent</span>: The parent entity of the text (default is <span class="boolean">camera.ui</span>).
- <span class="properties">shader</span>: The shader applied to the text.
- <span class="properties">text_nodes</span>: List of text nodes.
- <span class="properties">images</span>: List of images in the text.
- <span class="properties">origin</span>: The origin point of the text.
- <span class="properties">font</span>: The font used for the text.
- <span class="properties">resolution</span>: The resolution of the text.
- <span class="properties">use_tags</span>: If <span class="boolean">True</span>, tags are used for text formatting.
- <span class="properties">line_height</span>: The height of each line of text.
- <span class="properties">start_tag</span>: The start tag for formatting.
- <span class="properties">end_tag</span>: The end tag for formatting.
- <span class="properties">text_colors</span>: Dictionary containing text colors.
- <span class="properties">tag</span>: The combined start and end tag.
- <span class="properties">current_color</span>: The current text color.
- <span class="properties">scale_override</span>: Scale override for the text.
- <span class="properties">appear_sequence</span>: Sequence for appearing text.

### Functions

- <span class="function">text</span>(<span class="syntax">text</span>): Sets the text content.
- <span class="function">create_text_section</span>(<span class="syntax">text</span>, <span class="syntax">tag</span>=<span class="string">""</span>, <span class="syntax">x</span>=<span class="number">0</span>, <span class="syntax">y</span>=<span class="number">0</span>): Creates a text section with optional tag and position.
- <span class="function">align</span>(): Aligns the text.
- <span class="function">create_background</span>(<span class="syntax">padding</span>=size*<span class="number">2</span></span>, <span class="syntax">radius</span>=size, <span class="syntax">color</span>=ursina.color.black66): Creates a background for the text.
- <span class="function">appear</span>(<span class="syntax">speed</span>=<span class="number">.025</span>): Animates the text to appear.
- <span class="function">get_width</span>(<span class="syntax">string</span>, <span class="syntax">font</span>=<span class="boolean">None</span>): Gets the width of a string.

### Example

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

To import audio in Ursina, you can use the <span class="syntax">Audio</span> class provided by the engine. This class allows you to manage and control audio files within your application. Here's a step-by-step guide on how to import and use audio:

1. <span class="properties">Import the Audio Class</span>
   First, ensure that you have imported the <span class="syntax">Audio</span> class from Ursina.

   ```python
   from ursina import Audio
   ```

2. <span class="properties">Create an Instance of Audio</span>
   You can create an audio object by instantiating the <span class="syntax">Audio</span> class. You need to specify the path to your audio file. Optionally, you can set other parameters like volume, pitch, and loop.

   ```python
   background_music = Audio('path_to_music.mp3', loop=True, autoplay=True)
   ```

3. <span class="properties">Control Audio Playback</span>
   After creating an audio object, you can control its playback using methods like <span class="syntax">play()</span>, <span class="syntax">pause()</span>, and <span class="syntax">stop()</span>.

   ```python
   background_music.play()
   background_music.pause()
   background_music.stop()
   ```

4. <span class="properties">Adjust Audio Properties</span>
   You can adjust properties such as volume and pitch at runtime.

   ```python
   background_music.volume = 0.5  # Set volume to 50%
   background_music.pitch = 1.2   # Increase pitch
   ```

This setup allows you to integrate and control audio within your Ursina applications effectively.

### Parameters

```python
Audio(sound_file_name='', volume=1, pitch=1, balance=0, 
   loop=False, loops=1, autoplay=True, auto_destroy=False, 
   **kwargs
)

# Initializes an audio entity with optional parameters such as
# the sound file name, volume, pitch, balance, loop settings,
# autoplay, auto_destroy, and additional keyword arguments.
```

### Properties

- <span class="properties">volume</span>: The volume of the audio.
- <span class="properties">pitch</span>: The pitch of the audio.
- <span class="properties">loop</span>: If <span class="boolean">True</span>, the audio will loop.
- <span class="properties">loops</span>: The number of times the audio will loop.
- <span class="properties">clip</span>: The sound file name.
- <span class="properties">length</span>: The duration of the audio clip.
- <span class="properties">status</span>: The status of the audio (<span class="boolean">playing</span>, <span class="boolean">paused</span>, <span class="boolean">stopped</span>).
- <span class="properties">ready</span>: If <span class="boolean">True</span>, the audio is ready to play.
- <span class="properties">playing</span>: If <span class="boolean">True</span>, the audio is currently playing.
- <span class="properties">time</span>: The current time position of the audio.
- <span class="properties">balance</span>: The balance of the audio (<span class="boolean">panning</span>). Should be a value between <span class="number">-0.5</span> and <span class="number">0.5</span>.

### Functions

- <span class="function">play</span>(<span class="syntax">start</span>=<span class="number">0</span>): Plays the audio from the specified start time.
- <span class="function">pause</span>()</span>: Pauses the audio.
- <span class="function">resume</span>()</span>: Resumes the audio from the paused state.
- <span class="function">stop</span>(<span class="syntax">destroy</span>=<span class="boolean">True</span>)</span>: Stops the audio. If <span class="syntax">destroy</span> is <span class="boolean">True</span>, the audio entity is destroyed.
- <span class="function">fade</span>(<span class="syntax">value</span>, <span class="syntax">duration</span>=<span class="number">.5</span>, <span class="syntax">delay</span>=<span class="number">0</span>, <span class="syntax">curve</span>=curve.in_expo, <span class="syntax">resolution</span>=<span class="boolean">None</span>, <span class="syntax">interrupt</span>=<span class="boolean">True</span>): Fades the volume of the audio to the specified value over a duration.
- <span class="function">fade_in</span>(<span class="sytnax">value</span>=<span class="number">1</span>, <span class="syntax">duration</span>=<span class="number">.5</span>, <span class="syntax">delay</span>=<span class="number">0</span>, <span class="syntax">curve</span>=curve.in_expo, <span class="syntax">resolution</span>=<span class="boolean">None</span>, <span class="syntax">interrupt</span>=<span class="string">'finish'</span>): Fades in the volume of the audio.
- <span class="function">fade_out</span>(<span class="syntax">value</span>=<span class="number">0</span>, <span class="syntax">duration</span>=<span class="number">.5</span>, <span class="syntax">delay</span>=<span class="number">0</span>, <span class="syntax">curve</span>=curve.in_expo, <span class="syntax">resolution</span>=<span class="boolean">None</span>, <span class="syntax">interrupt</span>=<span class="string">'finish'</span>): Fades out the volume of the audio.

### Example

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