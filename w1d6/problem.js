        /* 
         *  @param {a, b, c numbers}
         *  @return number
         */       
        const max = (a, b) => (a > b) ? a : b;
        /* 
         *  @param {a, b, c numbers}
         *  @return number
         */
        const maxOfThree = (a, b, c) => max(a, max(b, c));

        /* 
         *  @param {a character}
         *  @return boolean
         */
        const isVowel = (c) => ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
        
        /* 
         *  @param {an array}
         *  @return number
         */
        const sum = (arr) => arr.reduce((a, b) => a + b);
        /* 
         *  @param {an array}
         *  @return number
         */
        const multiply = (arr) => arr.reduce((a, b) => a * b);
        /* 
         *  @param {a string}
         *  @return a string
         */
        const reverse = (str) => {
            let splitString = str.split("");
            let reverseArray = splitString.reverse();
            let joinArray = reverseArray.join("");
            return joinArray;
        };
        /* 
         *  @param {arr}
         *  @return arr
         */
        const findLongestWord = (arr) => arr.reduce((a, b) => (a.length > b.length) ? a : b);
        /* 
         *  @param {arr}
         *  @return arr
         */
        const filterLongWords = (arr, i) => arr.filter((a) => a.length <= i);
        /* 
         *  @param {arr}
         *  @return arr
         */
        const multiplyEachByTen = (arr) => arr.map((a) => a * 10);
        /* 
         *  @param {arr}
         *  @return arr
         */
        const allElementThree = (arr) => arr.filter((a) => a === 3);


        // test
        console.log("Test max function : " + max(3, 5));
        console.log("Test maxOfThree function : " + maxOfThree(1, 2, 3));
        console.log("Test sum function : " + sum([1,2,3,4,5,6]));
        console.log("Test multiply function : " + multiply([1,2,3,4,5,6]));
        console.log("Test reverse function : " + reverse('1234123'));
        console.log("Test findLongestWord function : " + findLongestWord(['abc', 'abcd']));
        console.log("Test filterLongWords function : " + filterLongWords(['abc', 'abcd', 'abcde'], 4));
        console.log("Test multiplyEachByTen function : " + multiplyEachByTen([2, 5, 3, 5]));
        console.log("Test allElementThree function : " + allElementThree([3, 2, 5, 3, 5]));
        
