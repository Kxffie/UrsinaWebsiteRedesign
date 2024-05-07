---
title: Tic Tac Toe

hero:
  image:
    file: ./tic_tac_toe.jpg
  actions:
    - text: Source Code
      link: https://github.com/pokepetter/ursina/blob/master/samples/tic_tac_toe.py
      icon: right-arrow
      variant: primary
sidebar:
    order: 1
---

This script implements a simple Tic-Tac-Toe game using the Ursina game engine. It sets up the game environment, creates buttons for the game board, handles player input, checks for victory conditions, and displays the result.

### Code

```python
if __name__ == '__main__':
    # Initialize Ursina application
    app = Ursina()

    # Set up camera
    camera.orthographic = True
    camera.fov = 4
    camera.position = (1, 1)

    # Increase default text resolution
    Text.default_resolution *= 2

    # Create player entity
    player = Entity(name='o', color=color.azure)

    # Create cursor tooltip
    cursor = Tooltip(player.name, color=player.color, origin=(0,0), scale=4, enabled=True)
    cursor.background.color = color.clear

    # Create background entity
    bg = Entity(parent=scene, model='quad', texture='shore', scale=(16,8), z=10, color=color.light_gray)

    # Hide mouse cursor
    mouse.visible = False

    # Create a matrix to store the buttons
    board = [[None for x in range(3)] for y in range(3)]

    # Create buttons for the game board and assign click event handler
    for y in range(3):
        for x in range(3):
            b = Button(parent=scene, position=(x,y))
            board[x][y] = b

            # Button click event handler
            def on_click(b=b):
                b.text = player.name
                b.color = player.color
                b.collision = False
                check_for_victory()

                if player.name == 'o':
                    player.name = 'x'
                    player.color = color.orange
                else:
                    player.name = 'o'
                    player.color = color.azure

                cursor.text = player.name
                cursor.color = player.color

            b.on_click = on_click

def check_for_victory():
    # Check for winning conditions based on button text
    name = player.name
    won = (
        (board[0][0].text == name and board[1][0].text == name and board[2][0].text == name) or
        (board[0][1].text == name and board[1][1].text == name and board[2][1].text == name) or
        (board[0][2].text == name and board[1][2].text == name and board[2][2].text == name) or
        (board[0][0].text == name and board[0][1].text == name and board[0][2].text == name) or
        (board[1][0].text == name and board[1][1].text == name and board[1][2].text == name) or
        (board[2][0].text == name and board[2][1].text == name and board[2][2].text == name) or
        (board[0][0].text == name and board[1][1].text == name and board[2][2].text == name) or
        (board[0][2].text == name and board[1][1].text == name and board[2][0].text == name)
    )

    if won:
        print('Winner is:', name)
        cursor.text = ''
        mouse.visible = True
        Panel(z=1, scale=10, model='quad')
        t = Text(f'Player\n{name}\nwon!', scale=3, origin=(0,0), background=True)
        t.create_background(padding=(.5,.25), radius=Text.size/2)
        t.background.color = player.color.tint(-.2)

if __name__ == '__main__':
    # Run the Ursina application
    app.run()

```