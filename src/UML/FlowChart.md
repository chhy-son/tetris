# UML documentation
## Flow Chart
### General Flow Chart
```mermaid
---
title: Main
---
    flowchart TD
    Start([Start]) --> StartBtn{Is start?}
        StartBtn -->|Click| Tetromino[Do Tetris]
    Tetromino --> Dead{Is end?}
        Dead -->|yes| End([End])
        Dead -->|no| Tetromino
```
### Detail Flow Chart
```mermaid
---
title: Tetris
---
    flowchart TD
    Start([Start]) --> Create[Create random Tetromino]
    Create --> Wait[Wait for 500ms]
    Wait --> Drop[Drop the Tetromino one line]
    Drop --> Dead{Is the Tetrimino 
                over dead line?}
    Dead -->|no| Full{Is all blink 
                    in a line is full?}
        Full -->|yes| Clear[Clear the line]
            Clear --> Score[Add user score]
            Score --> Create
        Full -->|no| Create
    Dead -------->|yes| End([End])
```
