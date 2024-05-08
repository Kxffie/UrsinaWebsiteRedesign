---
title: Graphics
sidebar:
  order: 3
---
=======
---
title: Graphics
sidebar:
  order: 3
---

## Color

The `color` module in Ursina is designed to handle and manipulate colors within the engine. It provides a comprehensive set of functionalities to define colors using various color models such as RGB, RGBA, HSV, and hexadecimal formats. This module is essential for setting visual aspects of game elements, allowing developers to easily apply and adjust colors for materials, lights, and UI components.

### Attributes

- <span class="properties">.white</span>: White color.
- <span class="properties">.smoke</span>: Smoke color.
- <span class="properties">.light_gray</span>: Light gray color.
- <span class="properties">.gray</span>: Gray color.
- <span class="properties">.dark_gray</span>: Dark gray color.
- <span class="properties">.black</span>: Black color.
- <span class="properties">.red</span>: Red color.
- <span class="properties">.yellow</span>: Yellow color.
- <span class="properties">.lime</span>: Lime color.
- <span class="properties">.green</span>: Green color.
- <span class="properties">.turquoise</span>: Turquoise color.
- <span class="properties">.cyan</span>: Cyan color.
- <span class="properties">.azure</span>: Azure color.
- <span class="properties">.blue</span>: Blue color.
- <span class="properties">.violet</span>: Violet color.
- <span class="properties">.magenta</span>: Magenta color.
- <span class="properties">.pink</span>: Pink color.
- <span class="properties">.brown</span>: Brown color.
- <span class="properties">.olive</span>: Olive color.
- <span class="properties">.peach</span>: Peach color.
- <span class="properties">.gold</span>: Gold color.
- <span class="properties">.salmon</span>: Salmon color.
- <span class="properties">.clear</span>: Clear color.
- <span class="properties">.white10</span>: White color with 10% opacity.
- <span class="properties">.white33</span>: White color with 33% opacity.
- <span class="properties">.white50</span>: White color with 50% opacity.
- <span class="properties">.white66</span>: White color with 66% opacity.
- <span class="properties">.black10</span>: Black color with 10% opacity.
- <span class="properties">.black33</span>: Black color with 33% opacity.
- <span class="properties">.black50</span>: Black color with 50% opacity.
- <span class="properties">.black66</span>: Black color with 66% opacity.
- <span class="properties">.black90</span>: Black color with 90% opacity.
- <span class="properties">.text</span>: Smoke color.
- <span class="properties">.light_text</span>: Light Text color.
- <span class="properties">.dark_text</span>: Dark Text color.
- <span class="properties">.text_color</span>: Light Text color.
- <span class="properties">.color_names</span>: Color names.
- <span class="properties">.colors</span>: Colors.

### Functions

- <span class="function">color(h, s, v, a=1)</span>: Create a color using HSV values.
- <span class="function">hsv(h, s, v, a=1)</span>: Create a color using HSV values.
- <span class="function">rgba32(r, g, b, a=255)</span>: Create a color using RGBA values.
- <span class="function">rgb32(r, g, b)</span>: Create a color using RGB values.
- <span class="function">rgba(r, g, b, a)</span>: Create a color using RGBA values.
- <span class="function">rgb(r, g, b)</span>: Create a color using RGB values.
- <span class="function">to_hsv(color)</span>: Convert a color to HSV.
- <span class="function">hex(value)</span>: Convert a value to a hexadecimal color.
- <span class="function">rgb_to_hex(r, g, b, a=1)</span>: Convert a color to a hexadecimal color.
- <span class="function">brightness(color)</span>: Calculate the brightness of a color.
- <span class="function">inverse(color)</span>: Invert a color.
- <span class="function">random_color()</span>: Generate a random color.
- <span class="function">tint(color, amount=.2)</span>: Tint a color.

### Example

```python
copyfrom ursina import *
from ursina import Ursina, Entity, Button, Quad, grid_layout, color
app = Ursina()

print(color.brightness(color.blue))

p = Entity(x=-2)
for key in color.colors:
    print(key)
    b = Button(parent=p, model=Quad(0), color=color.colors[key], text=key)
    b.text_entity.scale *= .5

grid_layout(p.children, max_x=8)

for name in ('r', 'g', 'b', 'h', 's', 'v', 'brightness'):
    print(name + ':', getattr(color.random_color(), name))

e = Entity(model='cube', color=color.lime)
print(e.color.name)
print('rgb to hex:', color.rgb_to_hex(*color.blue))
e.color = color.color(1,2,3)
app.run()
```

---

## Mesh


### Attributes

- <span class="properties">Mesh.(0,0,0)</span> : GeomVertexFormat.getV3(),	
- <span class="properties">Mesh.(1,0,0)</span> : GeomVertexFormat.getV3c4(),	
- <span class="properties">Mesh.(0,1,0)</span> : GeomVertexFormat.getV3t2(),	
- <span class="properties">Mesh.(0,0,1)</span> : GeomVertexFormat.getV3n3(),	
- <span class="properties">Mesh.(1,0,1)</span> : GeomVertexFormat.getV3n3c4(),	
- <span class="properties">Mesh.(1,1,0)</span> : GeomVertexFormat.getV3c4t2(),	
- <span class="properties">Mesh.(0,1,1)</span> : GeomVertexFormat.getV3n3t2(),	
- <span class="properties">Mesh.(1,1,1)</span> : GeomVertexFormat.getV3n3c4t2(),	
- <span class="properties">Mesh.'triangle'</span> : GeomTriangles,	
- <span class="properties">Mesh.'tristrip'</span> : GeomTristrips,	
- <span class="properties">Mesh.'line'</span> : GeomLinestrips,
- <span class="properties">Mesh.'point'</span> : GeomPoints,	

- <span class="properties">vertices</span>: Vertices.
- <span class="properties">triangles</span>: Triangles.
- <span class="properties">colors</span>: Colors.
- <span class="properties">uvs</span>: UVs.
- <span class="properties">normals</span>: Normals.
- <span class="properties">static</span>: Static.
- <span class="properties">mode</span>: Mode.
- <span class="properties">thickness</span>: Thickness.
- <span class="properties">render_points_in_3d</span>: Render points in 3D.

### Properties
- <span class="properties">recipe</span>: Recipe.
- <span class="properties">render_points_in_3d</span>: Render points in 3D.
- <span class="properties">thickness</span>: Thickness.
- <span class="properties">triangles</span>: Triangles.

### Functions
- <span class="function">generate()</span>: Generate.
- <span class="function">generate_normals(smooth=True)</span>: Generate normals.
- <span class="function">colorize(left=color.white, right=color.blue, down=color.red, up=color.green, back=color.white, forward=color.white, smooth=True, world_space=True, strength=1)</span>: Colorize.
- <span class="function">project_uvs(aspect_ratio=1, direction='forward')</span>: Project UVs.
- <span class="function">clear(regenerate=True)</span>: Clear.
- <span class="function">save(name='', folder:Path=application.compressed_models_folder, flip_faces=False)</span>: Save.

### Example

```python
copyfrom ursina import *
app = Ursina()

e = Entity(position=(0,0), model=Mesh(vertices=[(-.5,0,0), (.5,0,0), (0, 1, 0)]))

e = Entity(position=(1,0), model=Mesh(vertices=((-.5,0,0), (.5,0,0), (0, 1, 0))))
Text(parent=e, text='triangle mesh\nwith verts as tuple of tuples', y=1, scale=5, origin=(0,-.5))

e = Entity(position=(0,-2), model=Mesh(vertices=[[-.5,0,0], [.5,0,0], [0, 1, 0]]))
Text(parent=e, text='triangle mesh\nwith verts as list of lists', y=1, scale=5, origin=(0,-.5))

e = Entity(position=(1,-2), model=Mesh(
    vertices=([-.5,0,0], [.5,0,0], [0, 1, 0])
))
Text(parent=e, text='triangle mesh\nwith verts as tuple of lists', y=1, scale=5, origin=(0,-.5))

e = Entity(position=(0,-4), model=Mesh(
    vertices=[Vec3(-.5,0,0), Vec3(.5,0,0), Vec3(0, 1, 0)],
))
Text(parent=e, text='triangle mesh\nwith verts as list Vec3', y=1, scale=5, origin=(0,-.5))


e = Entity(position=(1,-4), model=Mesh(
    vertices=[Vec3(-.5,0,0), Vec3(.5,0,0), Vec3(0, 1, 0)],
    triangles = [0,1,2],
))
Text(parent=e, text='triangle mesh\nwith tris as flat list', y=1, scale=5, origin=(0,-.5))

e = Entity(position=(2.5,0), model=Mesh(
    vertices=[Vec3(-.5,0,0), Vec3(.5,0,0), Vec3(0, 1, 0)],
    triangles = [(0,1,2), (2,1,0)], # should be double sided
))
Text(parent=e, text='triangle mesh\nwith tris as list of triangles', y=1, scale=5, origin=(0,-.5))


continious_line = Entity(position=(4,0), model=Mesh(
    vertices=(Vec3(0,0,0), Vec3(.6,.3,0), Vec3(1,1,0), Vec3(.6,1.7,0), Vec3(0,2,0)),
    mode='line',
    thickness=4,
    ), color=color.cyan)
Text(parent=continious_line, text='continious_line', y=1, scale=5)

line_segments = Entity(position=(4,-2), model=Mesh(
    vertices=(Vec3(0,0,0), Vec3(.6,.3,0), Vec3(1,1,0), Vec3(.6,1.7,0), Vec3(0,2,0)),
    triangles= ((0,1), (3,4)),
    mode='line',
    thickness=4,
    ), color=color.magenta)
Text(parent=line_segments, text='line_segments', y=1, scale=5)

points = Entity(position=(6,0), model=Mesh(vertices=(Vec3(0,0,0), Vec3(.6,.3,0), Vec3(1,1,0), Vec3(.6,1.7,0), Vec3(0,2,0)), mode='point', thickness=.05), color=color.red)
Text(parent=points, text='points', y=1, scale=5)

points_2d = Entity(position=(6,-2), model=Mesh(vertices=(Vec3(0,0,0), Vec3(.6,.3,0), Vec3(1,1,0), Vec3(.6,1.7,0), Vec3(0,2,0)), mode='point', thickness=10, render_points_in_3d=False), color=color.red)
Text(parent=points_2d, text='points_2d', y=1, scale=5)

quad = Entity(
    position=(8,0),
    model=Mesh(
        vertices=((0.5, 0.5, 0.0), (-0.5, 0.5, 0.0), (-0.5, -0.5, 0.0), (0.5, -0.5, 0.0), (0.5, 0.5, 0.0), (-0.5, -0.5, 0.0)),
        uvs=((1, 1), (0, 1), (0, 0), (1, 0), (1, 1), (0, 0)),
        mode='triangle'),
    texture='shore'
    )
Text(parent=quad, text='quad_with_uvs', y=1, scale=5, origin=(0,-.5))

quad = Entity(
    position=(8,-2),
    model=Mesh(
        vertices=((0.5, 0.5, 0.0), (-0.5, 0.5, 0.0), (-0.5, -0.5, 0.0), (0.5, -0.5, 0.0), (0.5, 0.5, 0.0), (-0.5, -0.5, 0.0)),
        uvs=((1, 1), (0, 1), (0, 0), (1, 0), (1, 1), (0, 0)),
        normals=[(-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0)],
        mode='triangle'),
    )
Text(parent=quad, text='quad_with_normals', y=1, scale=5, origin=(0,-.5))

quad = Entity(
    position=(8,-4),
    model=Mesh(
        vertices=((0.5, 0.5, 0.0), (-0.5, 0.5, 0.0), (-0.5, -0.5, 0.0), (0.5, -0.5, 0.0), (0.5, 0.5, 0.0), (-0.5, -0.5, 0.0)),
        uvs=((1, 1), (0, 1), (0, 0), (1, 0), (1, 1), (0, 0)),
        normals=[(-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0)],
        mode='triangle'),
    )
Text(parent=quad, text='quad_with_usv_and_normals', y=1, scale=5, origin=(0,-.5))

quad = Entity(
    position=(8,-6),
    model=Mesh(
        vertices=((0.5, 0.5, 0.0), (-0.5, 0.5, 0.0), (-0.5, -0.5, 0.0), (0.5, -0.5, 0.0), (0.5, 0.5, 0.0), (-0.5, -0.5, 0.0)),
        uvs=((1, 1), (0, 1), (0, 0), (1, 0), (1, 1), (0, 0)),
        normals=[(-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0), (-0.0, 0.0, -1.0)],
        colors=[color.red, color.yellow, color.green, color.cyan, color.blue, color.magenta],
        mode='triangle'),
    )
Text(parent=quad, text='quad_with_usv_and_normals_and_vertex_colors', y=1, scale=5, origin=(0,-.5))

quad = Entity(
    position=(10,0),
    model=Mesh(
        vertices=((-0.5, -0.5, 0.0), (0.5, -0.5, 0.0), (0.5, 0.5, 0.0), (-0.5, 0.5, 0.0)),
        triangles=(0,1,2, 2,3,0),
        mode='triangle'),
    )
Text(parent=quad, text='triangles flat', y=1, scale=5, origin=(0,-.5))

quad = Entity(
    position=(10,-2),
    model=Mesh(
        vertices=((-0.5, -0.5, 0.0), (0.5, -0.5, 0.0), (0.5, 0.5, 0.0), (-0.5, 0.5, 0.0)),
        triangles=((0,1,2), (2,3,0)),
        mode='triangle'),
    )
Text(parent=quad, text='triangles triplets', y=1, scale=5, origin=(0,-.5))

quad = Entity(
    position=(10,-4),
    model=Mesh(
        vertices=((-0.5, -0.5, 0.0), (0.5, -0.5, 0.0), (0.5, 0.5, 0.0), (-0.5, 0.5, 0.0)),
        triangles=((0,1,2,3), (0,3,2)),
        mode='triangle'),
    )
Text(parent=quad, text='triangles quad + tri', y=1, scale=5, origin=(0,-.5))

copy_test = Entity(position=(12,0), model=copy(quad.model))
Text(parent=copy_test, text='copy_test', y=1, scale=5, origin=(0,-.5))

deepcopy_test = Entity(position=(12,-2), model=deepcopy(quad.model))
Text(parent=deepcopy_test, text='deepcopy_test', y=1, scale=5, origin=(0,-.5))

clear_test = Entity(position=(12,-4), model=deepcopy(quad.model))
clear_test.model.clear()
Text(parent=clear_test, text='.clear() test', y=1, scale=5, origin=(0,-.5))

window.color = color.black
EditorCamera()

app.run()
```

---

## Shader

The Shader class in Ursina allows the creation and management of shaders for rendering objects. When initializing a shader object, you provide parameters such as the name, language, vertex, fragment, and optionally geometry shaders. The name parameter represents the identifier for the shader. The language parameter specifies the shader language, with options like GLSL, Cg, HLSL, and SPIR-V. You can assign the shader code for the vertex and fragment stages. The geometry parameter is used for geometry shaders, which are optional. Additionally, there's a dictionary of kwargs for any additional parameters.

### Properties:

- <span class="properties">Shader.CG</span>: Represents the Cg shader language.
- <span class="properties">Shader.GLSL</span>: Represents the GLSL shader language.
- <span class="properties">Shader.HLSL</span>: Represents the HLSL shader language.
- <span class="properties">Shader.SPIR_V</span>: Represents the SPIR-V shader language.
- <span class="properties">.path</span>: The path where the shader is located.
- <span class="properties">.name</span>: The name of the shader.
- <span class="properties">.language</span>: The shader language used.
- <span class="properties">.vertex</span>: The vertex shader code.
- <span class="properties">.fragment</span>: The fragment shader code.
- <span class="properties">.geometry</span>: The geometry shader code.
- <span class="properties">.entity</span>: The entity associated with the shader.
- <span class="properties">.default_input</span>: A dictionary for default input values.
- <span class="properties">.compiled</span>: Indicates whether the shader has been compiled or not.

### Functions
- <span class="function">compile(shader_includes=True)</span>: Compiles the shader, including shader includes if specified.
- <span class="function">load(cls, language=Panda3dShader.SL_GLSL, vertex=None, fragment=None, geometry=None, **kwargs)</span>: Loads a shader with the specified parameters.

### Example
```python
from time import perf_counter
t = perf_counter()
from ursina import *
from ursina import Ursina, Entity, held_keys, scene, EditorCamera

app = Ursina()
Entity(model='cube', shader=Shader())
EditorCamera()
print('ttttttttttttt', perf_counter() - t)
def input(key):
    if held_keys['control'] and key == 'r':
        reload_shaders()

def reload_shaders():
    for e in scene.entities:
        if hasattr(e, '_shader'):
            print('-------', e.shader)

app.run()
```

---

## Texture

The Texture class in Ursina represents an image or texture used for rendering objects in the game. When creating a new texture object, you provide the value parameter, which can be a filename of the image or a PIL image. Optionally, you can specify the filtering mode, which determines how the texture is sampled when rendered. The default value is set to 'default'.

### Properties
- <span class="properties">.name</span>: The name of the texture.
- <span class="properties">.size</span>: The size of the texture.
- <span class="properties">.width</span>: The width of the texture.
- <span class="properties">.height</span>: The height of the texture.
- <span class="properties">.pixels</span>: The pixel data of the texture.
- <span class="properties">.filtering</span>: The filtering mode used for texture sampling.
- <span class="properties">.repeat</span>: Determines if the texture should repeat in both directions.

### Functions:
- <span class="function">new(size, color=(255,255,255))</span>: Creates a new texture with the specified size and color.
- <span class="function">get_pixel(x, y)</span>: Retrieves the color of the pixel at the specified coordinates.
- <span class="function">get_pixels(start, end)</span>: Retrieves a range of pixels from the texture.
- <span class="function">set_pixel(x, y, color)</span>: Sets the color of the pixel at the specified coordinates.
- <span class="function">apply()</span>: Applies any changes made to the texture.
- <span class="function">save(path)</span>: Saves the texture to the specified file path.

### Example
```python
from ursina import *
from ursina import texture_importer
app = Ursina()
'''
    The Texture class rarely used manually but usually instantiated
    when assigning a texture to an Entity
    texture = Texture(path / PIL.Image / panda3d.core.Texture)

    A texture file can be a .png, .jpg or .psd.
    If it's a .psd it and no compressed version exists, it will compress it automatically.
'''
e = Entity(model='quad', texture='brick')
e.texture.set_pixel(0, 2, color.blue)
e.texture.apply()
```

---

## Light (Entity)

The Light class in Ursina represents a light source in the scene. It is a subclass of the Entity class, inheriting all its properties and functionalities. When creating a new light, you can pass any keyword arguments accepted by the Entity class constructor to customize its properties.

### Properties
- <span class="properties">.color</span>: The color of the light, determining its hue and intensity.

### Example
```python
from ursina import Ursina, EditorCamera, color, Vec3

app = Ursina()
from ursina.shaders import lit_with_shadows_shader # you have to apply this shader to enties for them to receive shadows.
EditorCamera()
Entity(model='plane', scale=10, color=color.gray, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, shader=lit_with_shadows_shader, color=color.light_gray)
light = DirectionalLight(shadows=True)
light.look_at(Vec3(1,-1,1))

dont_cast_shadow = Entity(model='cube', y=1, shader=lit_with_shadows_shader, x=2, color=color.light_gray)
dont_cast_shadow.hide(0b0001)

unlit_entity = Entity(model='cube', y=1,x=-2, unlit=True, color=color.light_gray)

bar = Entity(model='cube', position=(0,3,-2), shader=lit_with_shadows_shader, scale=(10,.2,.2), color=color.light_gray)

app.run()
```

---

## Directional Light (Entity)

The DirectionalLight class in Ursina represents a directional light source in the scene. It is a subclass of the Light class, inheriting its properties and functionalities while adding specific attributes for directional lighting. When creating a new directional light, you can pass any keyword arguments accepted by the Light class constructor to customize its properties. Additionally, you can enable shadows by setting the shadows parameter to True.

### Properties:
- <span class="properties">.shadow</span>: A boolean indicating whether shadows are enabled for this directional light.

### Functions:
- <span class="function">update_bounds(entity=scene)</span>: Update the shadow area to fit the bounds of the target entity. By default, it fits to the scene.

### Example
```python
from ursina import Ursina, EditorCamera, color, Vec3

app = Ursina()
from ursina.shaders import lit_with_shadows_shader # you have to apply this shader to enties for them to receive shadows.
EditorCamera()
Entity(model='plane', scale=10, color=color.gray, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, shader=lit_with_shadows_shader, color=color.light_gray)
light = DirectionalLight(shadows=True)
light.look_at(Vec3(1,-1,1))

dont_cast_shadow = Entity(model='cube', y=1, shader=lit_with_shadows_shader, x=2, color=color.light_gray)
dont_cast_shadow.hide(0b0001)

unlit_entity = Entity(model='cube', y=1,x=-2, unlit=True, color=color.light_gray)

bar = Entity(model='cube', position=(0,3,-2), shader=lit_with_shadows_shader, scale=(10,.2,.2), color=color.light_gray)

app.run()
```

---

## PointLight(Light)

### Example
```python
from ursina import Ursina, EditorCamera, color, Vec3

app = Ursina()
from ursina.shaders import lit_with_shadows_shader # you have to apply this shader to enties for them to receive shadows.
EditorCamera()
Entity(model='plane', scale=10, color=color.gray, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, shader=lit_with_shadows_shader, color=color.light_gray)
light = DirectionalLight(shadows=True)
light.look_at(Vec3(1,-1,1))

dont_cast_shadow = Entity(model='cube', y=1, shader=lit_with_shadows_shader, x=2, color=color.light_gray)
dont_cast_shadow.hide(0b0001)

unlit_entity = Entity(model='cube', y=1,x=-2, unlit=True, color=color.light_gray)

bar = Entity(model='cube', position=(0,3,-2), shader=lit_with_shadows_shader, scale=(10,.2,.2), color=color.light_gray)

app.run()
```

---

## AmbientLight(Light)

### Example
```python
from ursina import Ursina, EditorCamera, color, Vec3

app = Ursina()
from ursina.shaders import lit_with_shadows_shader # you have to apply this shader to enties for them to receive shadows.
EditorCamera()
Entity(model='plane', scale=10, color=color.gray, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, shader=lit_with_shadows_shader, color=color.light_gray)
light = DirectionalLight(shadows=True)
light.look_at(Vec3(1,-1,1))

dont_cast_shadow = Entity(model='cube', y=1, shader=lit_with_shadows_shader, x=2, color=color.light_gray)
dont_cast_shadow.hide(0b0001)

unlit_entity = Entity(model='cube', y=1,x=-2, unlit=True, color=color.light_gray)

bar = Entity(model='cube', position=(0,3,-2), shader=lit_with_shadows_shader, scale=(10,.2,.2), color=color.light_gray)

app.run()
```

---

## Spotlight(Light)

### Example
```python
from ursina import Ursina, EditorCamera, color, Vec3

app = Ursina()
from ursina.shaders import lit_with_shadows_shader # you have to apply this shader to enties for them to receive shadows.
EditorCamera()
Entity(model='plane', scale=10, color=color.gray, shader=lit_with_shadows_shader)
Entity(model='cube', y=1, shader=lit_with_shadows_shader, color=color.light_gray)
light = DirectionalLight(shadows=True)
light.look_at(Vec3(1,-1,1))

dont_cast_shadow = Entity(model='cube', y=1, shader=lit_with_shadows_shader, x=2, color=color.light_gray)
dont_cast_shadow.hide(0b0001)

unlit_entity = Entity(model='cube', y=1,x=-2, unlit=True, color=color.light_gray)

bar = Entity(model='cube', position=(0,3,-2), shader=lit_with_shadows_shader, scale=(10,.2,.2), color=color.light_gray)

app.run()
```
