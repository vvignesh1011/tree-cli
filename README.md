#install the package
git clone https://github.com/vvignesh1011/tree-cli.git
npm link

#run the package
tree-cli

# print specific folder using -r / --root

example tree-cli --root ./src

# omit folders for print using -o / --omit

example tree-cli --omit ./dist ./node_modules
