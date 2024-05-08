---
title: Core Modules
sidebar:
  order: 2
---

## Camera

The camera in Ursina allows you to control the view and perspective of your scene. Below are the attributes and functions associated with the camera.

### Attributes

- `.parent`: The parent entity of the camera, typically set to `scene`.
- `.name`: The name of the camera.
- `.eternal`: Boolean indicating whether the camera is eternal (persists across scenes).
- `.ui_size`: The size of the UI.
- `.perspective_lens_node`: Node for the perspective lens.
- `.orthographic_lens_node`: Node for the orthographic lens.
- `.ui`: Entity for UI elements.
- `.overlay`: Entity for overlay elements.

### Functions

- `set_up()`: Sets up the camera.
- `orthographic_getter()`: Getter function for orthographic mode.
- `orthographic_setter(value)`: Setter function for orthographic mode.
- `fov_getter()`: Getter function for field of view (FOV).
- `fov_setter(value)`: Setter function for field of view (FOV).
- `clip_plane_near_getter()`: Getter function for the near clipping plane.
- `clip_plane_near_setter(value)`: Setter function for the near clipping plane.
- `clip_plane_far_getter()`: Getter function for the far clipping plane.
- `clip_plane_far_setter(value)`: Setter function for the far clipping plane.
- `aspect_ratio_getter()`: Getter function for the aspect ratio.
- `shader_setter(value)`: Setter function for the shader.
- `set_shader_input(name, value)`: Sets input for the shader.

### Example

```python
from ursina import *

app = Ursina()

camera.orthographic = True

# Create entities
e1 = Entity(model='quad', color=color.random_color(), position=(-2, 0, 10))
e2 = Entity(model='quad', color=color.random_color(), position=(2, 0, 10))
e3 = Entity(model='quad', color=color.random_color(), position=(0, 0, 40))

# Set up editor camera and shader
EditorCamera()
from ursina.shaders import camera_grayscale_shader
camera.shader = camera_grayscale_shader

app.run()
```

---

## Mouse

The mouse in Ursina provides functionalities for tracking mouse movements, clicks, and interactions with entities in the scene.

### Attributes

- `.enabled`: Boolean indicating whether the mouse is enabled.
- `.visible`: Boolean indicating whether the mouse cursor is visible.
- `.locked`: Boolean indicating whether the mouse cursor is locked.
- `.position`: The position of the mouse cursor in 3D space.
- `.delta`: The movement of the mouse since a mouse button was pressed.
- `.prev_x`, `.prev_y`: Previous x and y positions of the mouse cursor.
- `.start_x`, `.start_y`: Initial x and y positions of the mouse cursor.
- `.velocity`: Velocity of the mouse cursor.
- `.moving`: Boolean indicating whether the mouse cursor is moving.
- `.prev_click_time`: Time of the previous mouse click.
- `.prev_click_pos`: Previous position of the mouse click.
- `.double_click_distance`: Distance threshold for double-click detection.
- `.double_click_movement_limit`: Movement limit for double-click detection.
- `.hovered_entity`: The closest hovered entity with a collider.
- `.left`, `.right`, `.middle`: Booleans indicating whether the left, right, or middle mouse button is pressed.
- `.delta_drag`: Movement between left mouse down and left mouse up.
- `.update_step`: Update step for the mouse.
- `.traverse_target`: Target for collision traversal.
- `.raycast`: Boolean indicating whether raycasting is enabled.
- `.collision`: Collision information for the mouse.
- `.collisions`: List of collisions.
- `.enabled`: Boolean indicating whether the mouse is enabled.

### Functions

- `x()`, `y()`: Get the x and y positions of the mouse cursor.
- `position()`: Get the position of the mouse cursor.
- `locked()`: Get or set the locked state of the mouse cursor.
- `visible()`: Get or set the visibility of the mouse cursor.
- `input(key)`: Handle input events for the mouse.
- `update()`: Update the mouse state.
- `normal()`: Get the normal of the polygon, in local space.
- `world_normal()`: Get the normal of the polygon, in world space.
- `point()`: Get the point hit, in local space.
- `world_point()`: Get the point hit, in world space.
- `is_outside()`: Check if the mouse cursor is outside the screen.
- `find_collision()`: Find collisions with the mouse cursor.
- `unhover_everything_not_hit()`: Unhover entities that are not hit by the mouse cursor.

### Example

```python
from ursina import *

app = Ursina()
Button(parent=scene, text='a')

def input(key):
    if key == 'space':
        mouse.locked = not mouse.locked
        print(mouse.velocity)

Cursor()

app.run()
```

---

## Window

The `Window` class in Ursina provides functionalities for managing the application window's properties and behavior.

### Attributes

- `.title`: Title of the application window.
- `.icon`: Icon for the application window.
- `.monitors`: List of available monitors.
- `.main_monitor`: The main monitor.
- `.monitor_index`: Index of the monitor.
- `.windowed_position`: Position of the window when in windowed mode.
- `.show_ursina_splash`: Boolean indicating whether to display the Ursina splash screen.
- `.top`, `.bottom`, `.center`: Predefined screen positions.
- `.forced_aspect_ratio`: Forced aspect ratio for the window.
- `.always_on_top`: Boolean indicating whether the window is always on top.
- `.vsync`: Vertical sync setting.
- `.color`: Color of the window.
- `.render_modes`: Available render modes.
- `.render_mode`: Current render mode.
- `.editor_ui`: UI for the editor.
- `.position`: Position of the window.
- `.exit_button`: Button to exit the application.
- `.fps_counter`: Text displaying the current FPS.
- `.entity_counter`: Text displaying the number of entities.
- `.collider_counter`: Text displaying the number of colliders.
- `.cog_menu`: Button list for the cog menu.
- `.cog_button`: Button for the cog menu.
- `.prev_size`: Previous size of the window.
- `.size`: Size of the window.

### Functions

- `ready()`: Initialize the window with specified settings.
- `apply_settings()`: Apply the specified settings to the window.
- `left()`, `right()`, `top_left()`, `top_right()`, `bottom_left()`, `bottom_right()`, `center_on_screen()`: Set the window position.
- `make_editor_gui()`: Create the editor GUI.
- `window_input(key)`: Handle input events for the window.
- `update_aspect_ratio()`: Update the aspect ratio of the window.
- `position()`, `size()`, `aspect_ratio()`, `forced_aspect_ratio()`, `render_mode()`, `title()`, `icon()`, `borderless()`, `fullscreen()`, `color()`, `vsync()`: Get or set window properties.

### Example

```python
from ursina import *

app = Ursina(title='Ursina')

button_list = ButtonList(
    {
        'widow.position = Vec2(0,0)': Func(setattr, window, 'position', Vec2(0,0)),
        'widow.size = Vec2(512,512)': Func(setattr, window, 'size', Vec2(512,512)),
        'widow.center_on_screen()': window.center_on_screen,

        'widow.borderless = True': Func(setattr, window, 'borderless', True),
        'widow.borderless = False': Func(setattr, window, 'borderless', False),

        'widow.fullscreen = True': Func(setattr, window, 'fullscreen', True),
        'widow.fullscreen = False': Func(setattr, window, 'fullscreen', False),

        'widow.vsync = True': Func(setattr, window, 'vsync', True),
        'widow.vsync = False': Func(setattr, window, 'vsync', False),

        'application.base.win.request_properties(self)': Func(application.base.win.request_properties, window),
    }, y=0
)

startup_value = Text(y=.5,x=-.5)
startup_value.text = f'''
    position: {window.position}
    size: {window.size}
    aspect_ratio: {window.aspect_ratio}
    window.main_monitor.width: {window.main_monitor.width}
    window.main_monitor.height: {window.main_monitor.height}
'''

position_text = Text(y=.5,)

def input(key):
    if key == 'space':
        window.center_on_screen()

app.run()
```

---

## Application

The `Application` class in Ursina provides functionalities for managing the application's state and behavior.

### Attributes

- `.paused`: Boolean indicating whether the application is paused.
- `.time_scale`: Time scale factor for the application.
- `.calculate_dt`: Boolean indicating whether to calculate delta time.
- `.sequences`: List of sequences.
- `.trace_entity_definition`: Boolean enabling the setting of entity line definition.
- `.package_folder`: Path to the package folder.
- `.blender_paths`: Dictionary of Blender paths.
- `.development_mode`: Boolean indicating whether the application is in development mode.
- `.window_type`: Type of the window ('onscreen', 'fullscreen', etc.).
- `.show_ursina_splash`: Boolean indicating whether to display the Ursina splash screen.
- `.ursina_splash`: Path to the Ursina splash screen.
- `.gltf_no_srgb`: Boolean indicating whether to use GLTF without sRGB.
- `.scenes_folder`: Path to the scenes folder.
- `.scripts_folder`: Path to the scripts folder.
- `.fonts_folder`: Path to the fonts folder.
- `.compressed_textures_folder`: Path to the compressed textures folder.
- `.compressed_models_folder`: Path to the compressed models folder.
- `.base`: Base instance (will be set once the Ursina() is created).
- `.hot_reloader`: Hot reloader instance (will be set by main if development mode).

### Functions

- `pause()`: Pause the application.
- `resume()`: Resume the application.
- `quit()`: Quit the application.
- `load_settings(path)`: Load settings from the specified path.

### Example

```python
from ursina import *

def main():
    # Create an instance of the Application
    app = Ursina()

    # Set application properties
    app.paused = False
    app.time_scale = 1.0
    app.calculate_dt = True
    app.development_mode = True
    app.window_type = 'onscreen'
    app.show_ursina_splash = True

    # Define a function to pause and resume the application
    def toggle_pause():
        if app.paused:
            app.resume()
        else:
            app.pause()

    # Define a function to quit the application
    def quit_application():
        app.quit()

    # Load settings if there is a settings file
    settings_path = 'path/to/settings.json'
    app.load_settings(settings_path)

    # Run the application
    app.run()

if __name__ == '__main__':
    main()
```

---

## Scene

The `Scene` class in Ursina provides functionalities for managing the entities and collidables in the scene.

### Attributes

- `.entities`: List of entities in the scene.
- `.collidables`: Set of collidable entities in the scene.

### Functions

- `set_up()`: Set up the scene.
- `clear()`: Clear the scene.
- `fog_color()`: Get the fog color.
- `fog_color(value)`: Set the fog color.
- `fog_density()`: Get the fog density.
- `fog_density(value)`: Set the fog density.
- `children()`: Get the children of the scene.
- `children(value)`: Set the children of the scene.

### Example

```python
from ursina import *

app = Ursina()
e = Entity(model='plane', color=color.black, scale=100)
EditorCamera()
s = Sky()

def input(key):
    if key == 'l':
        for e in scene.entities:
            print(e.name)

    if key == 'd':
        scene.clear()
        Entity(model='cube')

scene.fog_density = .1          # sets exponential density
scene.fog_density = (50, 200)   # sets linear density start and end

app.run()
```