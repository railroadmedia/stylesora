# Filters

Filters allow users to add or remove data items from a data set (list, catalog, etc) by turning on and off certain elements. Filtering allows users to
remove visible items when viewing large data sets. Filtering can help a user find something they are searching for and make a decision when faced 
with a large number of options. 

## Filter Selection

Choosing the right filter in the right situation will help to improve usability and efficiency. Musroa supports several filter options. Consider the data the 
users are looking at, what they are trying to achieve, and how they may intuitavely narrow down that data when choosing a filter. 

## Filter Options

### Single Selection
The user can pick only one attribute to modify the data results.

### Multiple Categories
The user has the option to select attributes across multiple data categories

## Single Selection

Use a single-selection filter when the user can pick only one attribute to modify data results. They types of single-selection filters include:

- Dropdown
- Checkbox
- Radio Button

<!-- Examples -->

## Multiple Categories

A category represents a set of filter items within the same topic. For example, "Style" is a category and "Rock", "Funk", "Metal" and "Hip-Hop" are 
it's filter choices. Multiple filter categories may be applied to the same data set. For example a user could by "Style", "Skill Level", and "Topic".

Multiple category selections are usually placed vertically on the left side of the page. Multiple categories should never be inside of a dropdown menu
and are most commonly used within the homepage content filter system. 

<!-- Example -->

## Resetting Filters

Each filter should have a way to aclear all selected filters at once, without having to interact with each individual item. Clearing filters returns the filter to 
the original default state. 

If multiple categories have been applied to the same set then there should also be a visual representation of the applied filters and a way to dismiss all
applied filters at once. 

## Filter Reset Anatomy

<!-- Example Image -->

#### 1. Single Selection Reset
Single selection filters can be reset by clicking the close button. This returns the filter to the default
state. 

#### 2. Reset All Filters 
When more than one filter is applied a user can reset all the selected filters by clicking the clear all tab. 

#### 3. Clear Single Filter
When multiple filters have been added a user can remove a specific filter by clicking the close button on the 
item. All other applied filters will remain. 