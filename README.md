# Introduction

This is a web application with React framework that shows a chart of hierarchical positions. I used Treeflex library that helps user a simple hierarchical tree with basic styles. I also used Styled-components UI library to override default styles from Treeflex and also create a design of a position node.

I would like to explain the pattern.

- I have chosen random position and the hierarchy will be initially displayed with all the branches to reach to the position.
- Upper positions by one from current position will be displayed as a collapsed node
- But it can expand by clicking a position.

Compared to displaying only branches from top position to the current position, it is convenient to check other positions that are at the same position as the selected position is.

# Visualization

### Structure of a hierarachy

After I finished reading instructions and problem description, one of UI structures that I first focused on was to handle heavy and lean managements which were explained at the end of the instructions. I thought it was the most important part of implementation because as managers, leads, or sales reps are increasing, a size of the hierarchy would be also increasing and it will eventually become too large and hard to read it.

![image](https://user-images.githubusercontent.com/32205551/134948240-ce869142-b012-4ca3-9023-edb59e93be66.png)

Those three figures of the image above explains how my idea gets to the final design. In order to manage a size of the chart, I choose to expand only targetted position but the other nodes can expand whenever user clicks any one of the collasped nodes

Through the visualizing process, an initial structure of hierarchy is changed from showing everything at once to showing specific branches to the targetted node.

![image](https://user-images.githubusercontent.com/32205551/134948421-389536a9-ea86-4dfc-a62b-7bb0bd7fbdb1.png)

---

![image](https://user-images.githubusercontent.com/32205551/134948486-e9a7adbe-e986-4e80-9921-750991c2b44c.png)

---

### Styling the hierarchy

I tried to use different colors except white and black for each element that forms the hierarchy for user to quickly catch the structure. I planned to use 3-5 different colors and since 3 colors have already chosen, I additionally use one another color, 5 in total, to style the whole.

I would like to also explain about other details

- I created color indicators at the top of the page so that user can quickly catch what each color stands for.
- I added hover effect on each position based on its status.
- Number at the bottom of a position indicates a number of positions that each position is responsible for

### Implementation

- I created JSON as heavy and lean management based on sample hierarchy with additional data.
- I created a reusable component called, Position.
- I recursively created a hierarchy within Position : if a position has sub positions that it is in charge of, then make another sub positions within Position
- In order to testing refreshing the hierarchy, I made a similar situation
  - Set initial management with heavy management
  - Switch heavy management to lean management back and forth using useState
- In order to check UI compatible with a large TV screen, I deployed to github page and opened the website with my TV (~58inches)
  ![IMG_9982](https://user-images.githubusercontent.com/32205551/134952831-33333f4a-52be-411f-874d-0201df26001a.jpg)


### Link

[Check Hierarchy](https://yongkkim.github.io/Organizational-Hierarchy/)
