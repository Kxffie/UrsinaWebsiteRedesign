---
title: Inventory

hero:
  image:
    file: ./inventory.jpg
  actions:
    - text: Source Code
      link: https://github.com/pokepetter/ursina/blob/master/samples/inventory.py
      icon: right-arrow
      variant: primary
sidebar:
    order: 2
---

This script defines an Inventory class that represents an inventory system with draggable item icons. Each item in the inventory is represented by a draggable icon (Draggable) that can be added or removed dynamically. The inventory grid is set up using Quad entities, and items are added to the inventory based on user input (clicking the "+" button). The script demonstrates basic inventory management functionalities like adding items, handling item placement, and displaying tooltips for item information.

### Code

```python
# Define Inventory class inheriting from Entity
class Inventory(Entity):
    def __init__(self, width=5, height=8, **kwargs):
        # Initialize the Inventory with specified parameters
        super().__init__(
            parent = camera.ui,
            model = Quad(radius=.015),
            texture = 'white_cube',
            texture_scale = (width, height),
            scale = (width*.1, height*.1),
            origin = (-.5,.5),
            position = (-.3,.4),
            color = color.hsv(0, 0, .1, .9),
            )
        self.width = width
        self.height = height

        # Set additional attributes based on kwargs
        for key, value in kwargs.items():
            setattr(self, key, value)

    # Function to find a free spot in the inventory grid
    def find_free_spot(self):
        for y in range(self.height):
            for x in range(self.width):
                grid_positions = [(int(e.x*self.texture_scale[0]), int(e.y*self.texture_scale[1])) for e in self.children]

                if not (x, -y) in grid_positions:
                    return x, y

    # Function to add an item to the inventory
    def append(self, item, x=0, y=0):
        if len(self.children) >= self.width*self.height:
            # Display error message if inventory is full
            error_message = Text('<red>Inventory is full!', origin=(0,-1.5), x=-.5, scale=2)
            destroy(error_message, delay=1)
            return

        x, y = self.find_free_spot()

        # Create draggable icon for the item
        icon = Draggable(
            parent = self,
            model = 'quad',
            texture = item,
            color = color.white,
            scale_x = 1/self.texture_scale[0],
            scale_y = 1/self.texture_scale[1],
            origin = (-.5,.5),
            x = x * 1/self.texture_scale[0],
            y = -y * 1/self.texture_scale[1],
            z = -.5,
            )
        # Customize item name and appearance
        name = item.replace('_', ' ').title()
        if random.random() < .25:
            icon.color = color.gold
            name = '<orange>Rare ' + name
        icon.tooltip = Tooltip(name)
        icon.tooltip.background.color = color.hsv(0,0,0,.8)

        # Define drag and drop behavior for the item icon
        def drag():
            icon.org_pos = (icon.x, icon.y)
            icon.z -= .01   # ensure the dragged item overlaps the rest
        def drop():
            icon.x = int((icon.x + (icon.scale_x/2)) * self.width) / self.width
            icon.y = int((icon.y - (icon.scale_y/2)) * self.height) / self.height
            icon.z += .01
            # If outside, return to original position; if spot taken, swap positions
            if icon.x < 0 or icon.x >= 1 or icon.y > 0 or icon.y <= -1:
                icon.position = (icon.org_pos)
                return
            for c in self.children:
                if c == icon:
                    continue
                if c.x == icon.x and c.y == icon.y:
                    c.position = icon.org_pos
        icon.drag = drag
        icon.drop = drop

# Main application block
if __name__ == '__main__':
    # Initialize Ursina application
    app = Ursina()

    # Create an inventory instance
    inventory = Inventory()

    # Function to add a random item to the inventory
    def add_item():
        inventory.append(random.choice(('bag', 'bow_arrow', 'gem', 'orb', 'sword')))

    # Add initial items to the inventory
    add_item()
    add_item()
    add_item()

    # Create button for adding items
    add_item_button = Button(
        scale = (.1,.1),
        x = -.5,
        color = color.lime.tint(-.25),
        text = '+',
        tooltip = Tooltip('Add random item'),
        on_click = add_item
        )

    # Create background entity
    background = Entity(parent=camera.ui, model='quad', texture='shore', scale_x=camera.aspect_ratio, z=1)

    # Set up cursor and hide mouse cursor
    Cursor(texture='cursor', scale=.1)
    mouse.visible = False

    # Run the Ursina application
    app.run()

```