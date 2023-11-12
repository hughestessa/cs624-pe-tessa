## PE04
## STUDENT: TESSA HUGHES

# INPUT
There is currently no user input for this app, other than the cards which a user can touch to either expand and shrink.

# PROCESS
If a user touches one of the cards, the showThumbnail flag will flip to true or false based on the current state. If showThumbnail is true, then the styling will be updated to shrink everything in the card to 0.2 or 20% of the original size. If showThumbnail is false, then the styling will be updated to show the card's original size (400x230).

# OUTPUT
The output of this app shows a card for each person identified in the data array. I currently created 3 'people' in the data array, so my app lists 3 cards. Each card contains an image, name, occupation, and description of the 'person'.

# Final Notes
One thing I was not able to figure out was how to make the thumbnails take up less space when they were shrunk. I played around with the widths and heights of everything to get all my cards on one screen, but the thumbnails still took up as much realestate whether they were full-size (400x230) or shrunk (20%).