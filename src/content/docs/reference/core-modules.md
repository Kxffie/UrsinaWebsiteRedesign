---
title: Core Modules
sidebar:
  order: 2
---
=======
---
title: Core Modules
sidebar:
  order: 2
---
=======
---
title: Core Modules
sidebar:
  order: 2
---

## Camera

The <span class="entity">camera</span> in Ursina allows you to control the view and perspective of your scene. Below are the attributes and functions associated with the camera.

### Attributes

- <span class="properties">.parent</span>: The parent entity of the camera, typically set to <span class="syntax">scene</span>.
- <span class="properties">.name</span>: The name of the camera.
- <span class="properties">.eternal</span>: Boolean indicating whether the camera is eternal (persists across scenes).
- <span class="properties">.ui_size</span>: The size of the UI.
- <span class="properties">.perspective_lens_node</span>: Node for the perspective lens.
- <span class="properties">.orthographic_lens_node</span>: Node for the orthographic lens.
- <span class="properties">.ui</span>: Entity for UI elements.
- <span class="properties">.overlay</span>: Entity for overlay elements.

### Functions

- <span class="function">set_up()</span>: Sets up the camera.
- <span class="function">orthographic_getter()</span>: Getter function for orthographic mode.
- <span class="function">orthographic_setter(value)</span>: Setter function for orthographic mode.
- <span class="function">fov_getter()</span>: Getter function for field of view (FOV).
- <span class="function">fov_setter(value)</span>: Setter function for field of view (FOV).
- <span class="function">clip_plane_near_getter()</span>: Getter function for the near clipping plane.
- <span class="function">clip_plane_near_setter(value)</span>: Setter function for the near clipping plane.
- <span class="function">clip_plane_far_getter()</span>: Getter function for the far clipping plane.
- <span class="function">clip_plane_far_setter(value)</span>: Setter function for the far clipping plane.
- <span class="function">aspect_ratio_getter()</span>: Getter function for the aspect ratio.
- <span class="function">shader_setter(value)</span>: Setter function for the shader.
- <span class="function">set_shader_input(name, value)</span>: Sets input for the shader.

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
The <span class="entity">mouse</span> in Ursina provides functionalities for tracking mouse movements, clicks, and interactions with entities in the scene.

### Attributes

- <span class="properties">.enabled</span>: Boolean indicating whether the mouse is enabled.
- <span class="properties">.visible</span>: Boolean indicating whether the mouse cursor is visible.
- <span class="properties">.locked</span>: Boolean indicating whether the mouse cursor is locked.
- <span class="properties">.position</span>: The position of the mouse cursor in 3D space.
- <span class="properties">.delta</span>: The movement of the mouse since a mouse button was pressed.
- <span class="properties">.prev_x</span>, <span class="properties">.prev_y</span>: Previous x and y positions of the mouse cursor.
- <span class="properties">.start_x</span>, <span class="properties">.start_y</span>: Initial x and y positions of the mouse cursor.
- <span class="properties">.velocity</span>: Velocity of the mouse cursor.
- <span class="properties">.moving</span>: Boolean indicating whether the mouse cursor is moving.
- <span class="properties">.prev_click_time</span>: Time of the previous mouse click.
- <span class="properties">.prev_click_pos</span>: Previous position of the mouse click.
- <span class="properties">.double_click_distance</span>: Distance threshold for double-click detection.
- <span class="properties">.double_click_movement_limit</span>: Movement limit for double-click detection.
- <span class="properties">.hovered_entity</span>: The closest hovered entity with a collider.
- <span class="properties">.left</span>, <span class="properties">.right</span>, <span class="properties">.middle</span>: Booleans indicating whether the left, right, or middle mouse button is pressed.
- <span class="properties">.delta_drag</span>: Movement between left mouse down and left mouse up.
- <span class="properties">.update_step</span>: Update step for the mouse.
- <span class="properties">.traverse_target</span>: Target for collision traversal.
- <span class="properties">.raycast</span>: Boolean indicating whether raycasting is enabled.
- <span class="properties">.collision</span>: Collision information for the mouse.
- <span class="properties">.collisions</span>: List of collisions.

### Functions
- <span class="function">x()</span>, <span class="function">y()</span>: Get the x and y positions of the mouse cursor.
- <span class="function">position()</span>: Get the position of the mouse cursor.
- <span class="function">locked()</span>: Get or set the locked state of the mouse cursor.
- <span class="function">visible()</span>: Get or set the visibility of the mouse cursor.
- <span class="function">input(key)</span>: Handle input events for the mouse.
- <span class="function">update()</span>: Update the mouse state.
- <span class="function">normal()</span>: Get the normal of the polygon, in local space.
- <span class="function">world_normal()</span>: Get the normal of the polygon, in world space.
- <span class="function">point()</span>: Get the point hit, in local space.
- <span class="function">world_point()</span>: Get the point hit, in world space.
- <span class="function">is_outside()</span>: Check if the mouse cursor is outside the screen.
- <span class="function">find_collision()</span>: Find collisions with the mouse cursor.
- <span class="function">unhover_everything_not_hit()</span>: Unhover entities that are not hit by the mouse cursor.

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

The <span class="entity">Window</span> class in Ursina provides functionalities for managing the application window's properties and behavior.

### Attributes

- <span class="properties">.title</span>: Title of the application window.
- <span class="properties">.icon</span>: Icon for the application window.
- <span class="properties">.monitors</span>: List of available monitors.
- <span class="properties">.main_monitor</span>: The main monitor.
- <span class="properties">.monitor_index</span>: Index of the monitor.
- <span class="properties">.windowed_position</span>: Position of the window when in windowed mode.
- <span class="properties">.show_ursina_splash</span>: Boolean indicating whether to display the Ursina splash screen.
- <span class="properties">.top</span>, <span class="properties">.bottom</span>, <span class="properties">.center</span>: Predefined screen positions.
- <span class="properties">.forced_aspect_ratio</span>: Forced aspect ratio for the window.
- <span class="properties">.always_on_top</span>: Boolean indicating whether the window is always on top.
- <span class="properties">.vsync</span>: Vertical sync setting.
- <span class="properties">.color</span>: Color of the window.
- <span class="properties">.render_modes</span>: Available render modes.
- <span class="properties">.render_mode</span>: Current render mode.
- <span class="properties">.editor_ui</span>: UI for the editor.
- <span class="properties">.position</span>: Position of the window.
- <span class="properties">.exit_button</span>: Button to exit the application.
- <span class="properties">.fps_counter</span>: Text displaying the current FPS.
- <span class="properties">.entity_counter</span>: Text displaying the number of entities.
- <span class="properties">.collider_counter</span>: Text displaying the number of colliders.
- <span class="properties">.cog_menu</span>: Button list for the cog menu.
- <span class="properties">.cog_button</span>: Button for the cog menu.
- <span class="properties">.prev_size</span>: Previous size of the window.
- <span class="properties">.size</span>: Size of the window.

### Functions

- <span class="function">ready()</span>: Initialize the window with specified settings.
- <span class="function">apply_settings()</span>: Apply the specified settings to the window.
- <span class="function">left()</span>, <span class="function">right()</span>, <span class="function">top_left()</span>, <span class="function">top_right()</span>, <span class="function">bottom_left()</span>, <span class="function">bottom_right()</span>, <span class="function">center_on_screen()</span>: Set the window position.
- <span class="function">make_editor_gui()</span>: Create the editor GUI.
- <span class="function">window_input(key)</span>: Handle input events for the window.
- <span class="function">update_aspect_ratio()</span>: Update the aspect ratio of the window.
- <span class="function">position()</span>, <span class="function">size()</span>, <span class="function">aspect_ratio()</span>, <span class="function">forced_aspect_ratio()</span>, <span class="function">render_mode()</span>, <span class="function">title()</span>, <span class="function">icon()</span>, <span class="function">borderless()</span>, <span class="function">fullscreen()</span>, <span class="function">color()</span>, <span class="function">vsync()</span>: Get or set window properties.

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

The <span class="entity">Application</span> class in Ursina provides functionalities for managing the application's state and behavior.

### Attributes

- <span class="properties">.paused</span>: Boolean indicating whether the application is paused.
- <span class="properties">.time_scale</span>: Time scale factor for the application.
- <span class="properties">.calculate_dt</span>: Boolean indicating whether to calculate delta time.
- <span class="properties">.sequences</span>: List of sequences.
- <span class="properties">.trace_entity_definition</span>: Boolean enabling the setting of entity line definition.
- <span class="properties">.package_folder</span>: Path to the package folder.
- <span class="properties">.blender_paths</span>: Dictionary of Blender paths.
- <span class="properties">.development_mode</span>: Boolean indicating whether the application is in development mode.
- <span class="properties">.window_type</span>: Type of the window ('onscreen', 'fullscreen', etc.).
- <span class="properties">.show_ursina_splash</span>: Boolean indicating whether to display the Ursina splash screen.
- <span class="properties">.ursina_splash</span>: Path to the Ursina splash screen.
- <span class="properties">.gltf_no_srgb</span>: Boolean indicating whether to use GLTF without sRGB.
- <span class="properties">.scenes_folder</span>: Path to the scenes folder.
- <span class="properties">.scripts_folder</span>: Path to the scripts folder.
- <span class="properties">.fonts_folder</span>: Path to the fonts folder.
- <span class="properties">.compressed_textures_folder</span>: Path to the compressed textures folder.
- <span class="properties">.compressed_models_folder</span>: Path to the compressed models folder.
- <span class="properties">.base</span>: Base instance (will be set once the Ursina() is created).
- <span class="properties">.hot_reloader</span>: Hot reloader instance (will be set by main if development mode).

### Functions
- <span class="function">pause()</span>: Pause the application.
- <span class="function">resume()</span>: Resume the application.
- <span class="function">quit()</span>: Quit the application.
- <span class="function">load_settings(path)</span>: Load settings from the specified path.

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

The <span class="entity">Scene</span> class in Ursina provides functionalities for managing the entities and collidables in the scene.

### Attributes
- <span class="properties">.entities</span>: List of entities in the scene.
- <span class="properties">.collidables</span>: Set of collidable entities in the scene.
### Functions
- <span class="function">set_up()</span>: Set up the scene.
- <span class="function">clear()</span>: Clear the scene.
- <span class="function">fog_color()</span>: Get the fog color.
- <span class="function">fog_color(value)</span>: Set the fog color.
- <span class="function">fog_density()</span>: Get the fog density.
- <span class="function">fog_density(value)</span>: Set the fog density.
- <span class="function">children()</span>: Get the children of the scene.
- <span class="function">children(value)</span>: Set the children of the scene.

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
