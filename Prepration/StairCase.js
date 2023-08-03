// Staircase detail

// This is a staircase of size:

//    #
//   ##
//  ###
// ####

function stairCase(n) {
    for (let i = 1; i <= n; i++) {
        let hash = '', space = '';

        for (let j = 1; j <= n - i; j++) {
            space += ' ';
        }

        for (let j = 1; j <= i; j++) {
            hash += '#';
        }
        console.log(space+hash);
    }
}
stairCase(5);