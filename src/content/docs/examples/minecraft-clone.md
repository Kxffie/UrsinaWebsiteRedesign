---
title: Minecraft Clone

hero:
  image:
    file: ./minecraft_clone.jpg
  actions:
    - text: Source Code
      link: https://github.com/pokepetter/ursina/blob/master/samples/minecraft_clone.py
      icon: right-arrow
      variant: primary
sidebar:
    order: 4
---

This script sets up a basic voxel-based world using the Ursina framework. It defines a Voxel class that inherits from the Button class, creating 3D cube entities representing voxels. The script generates an 8x8 grid of voxels on the ground. Users can interact with the world by left-clicking to add voxels where they aim and right-clicking to delete existing voxels. Additionally, the script includes a first-person controller for player movement. 

**Disclaimer:** This solution is not scalable for creating a big world.
Creating a game like Minecraft requires specialized knowledge and is not as easy
to make as it looks.

You'll have to do some sort of chunking of the world and generate a combined mesh
instead of separate blocks if you want it to run fast. You can use the Mesh class for this.

You can then use blocks with colliders like in this example in a small area
around the player so you can interact with the world.


### Code

```python
# Import required modules from Ursina framework
from ursina import *
from ursina.prefabs.first_person_controller import FirstPersonController

# Initialize Ursina application
app = Ursina()

# Define a Voxel class inheriting from Button
class Voxel(Button):
    def __init__(self, position=(0,0,0)):
        super().__init__(parent=scene,
            position=position,
            model='cube',
            origin_y=.5,
            texture='white_cube',
            color=color.hsv(0, 0, random.uniform(.9, 1.0)),
            highlight_color=color.lime,
        )

# Create a grid of voxels
for z in range(8):
    for x in range(8):
        voxel = Voxel(position=(x,0,z))

# Function to handle user input for voxel creation and deletion
def input(key):
    if key == 'left mouse down':
        hit_info = raycast(camera.world_position, camera.forward, distance=5)
        if hit_info.hit:
            Voxel(position=hit_info.entity.position + hit_info.normal)
    if key == 'right mouse down' and mouse.hovered_entity:
        destroy(mouse.hovered_entity)

# Create a first-person controller for the player
player = FirstPersonController()

# Run the Ursina application
app.run()
```