// 1=>first version of function =>taking only two elements and adding it ,  if result matches the target it will return the indexes of element of only two continuously elements in array


function twoSum(num,target){
    let arr =[]
    let index = []
for(let i=0 ; i<num.length ;i++)
{
    let add = num[i] + num[i+1]
    arr.push(add)
    if(add == target)
    {
        index.push(i ,i+1)
    }
    
}
return index
}

// console.log(twoSum([1,3,3,4,5] , 7))

//1.a=> second version of function =>adding the number of elements from starting , will have to match the target else return some text

function nSum(num , target){
let arr = []
let index =[]
let sum =0
for(let i =0 ; i<num.length ;i++)
{
    sum = sum + num[i]
    index.push(i)
    if(sum == target){
        return index
    }
    else{
        return `No value found`
    }
}
}

// console.log(nSum([5,3,1,3] , 7))

//1.b=> Third version of function => adding the number of elements from any position in array, such that they match target

function anyTwoSum(nums , target){
for(let i =0 ; i<nums.length ; i++)
{
    for(let j = i+1 ; j<nums.length ; j++ )
    {
        let sum = nums[i] + nums[j]
        if(sum == target){
            return [i,j]
        }
    }
}
}

// console.log(anyTwoSum([3,2,3] , 6 ))


//2=>having two reverse order function and making them add , the result will be sum of two arrays(make it straight first) in reverse order

function addTwonumbers(l1 , l2){
    let result = []
    let num1 = ""
    let num2 = ""
for(let i =l1.length-1 ; i>=0 ;i--)
{
    num1 = num1 + l1[i]
}
for(let i =l2.length-1 ; i>=0 ;i--)
{
    num2 = num2 + l2[i]
}

let num3 = parseInt(num1) + parseInt(num2)
let str = num3.toString()
for(let i =str.length-1 ; i>=0 ;i--)
{
    let a = str.charAt(i)
   let n =  parseInt(a)
    result.push(n)
}
return result
}

console.log(addTwonumbers([1] ,[100]))






//3. Gives the length of string with unique characters 

// function lengthOfLongestSubstring(s){
//     let array = []
// for(let i = 0 ; i<s.length ; i++){
//     array.push(s[i])
// }
// let unique = new Set(array)
// let result = Array.from(unique).length
// return result

// }//it is returning subsequence and we have to make it substring
// console.log(lengthOfLongestSubstring('pwwkew')) 

// function lengthOfLongestSubstring(s){
// let array  ['s']
// }


//4 . Median of Two sorted arrays


var findMedianSortedArrays = function(nums1, nums2) {
    for(let i =0 ; i<nums2.length ; i++)
    {
          nums1.push(nums2[i])
        }
       nums1.sort() 
       let len = nums1.length
       let cal = 0
       if( len%2 == 0)
       {
     cal = (len/2 + (len/2+1)) / 2
    return cal.toFixed(4)
       }
       if(len%2 != 0)
       {
            cal = (len+1)/2
            return cal.toFixed(4)
       }
};

// console.log(findMedianSortedArrays([1,3] , [2]))
// console.log(findMedianSortedArrays([1,2] , [3,4]))
// console.log(findMedianSortedArrays([0,0] , [0,0]))


// function longestPalindromicSubString(str){
//     let len = str.length
//     let x = ""
//     let first = []
//     let second = []
// for (let i =0 ; i<len ; i++){
//     let index = len-(i+1)
//    let a =  str.charAt(i)
//    let b = str.charAt(index)
//    first.push(a)
//    second.push(b)
//    console.log(first , "first")
//    console.log(second , "second")
// }

// let string = ''
// let array  = []
// for(let i =0 ; i<len ; i++)
// {
//     for(let j =i ; j == i ; j++)
//     {
//       if(first[i] == second[j])
//       {
//           string = string + first[i]
//         }
//         else{
//             string = ''
//         }
//     }
//     array.push(string)
//     if(x.length < array[i].length)
//     {
//         x = array[i]
//     }
//     else{
//         x = ""
//     }
// }
// return x
// }//not completed only checking the palindromic string just  useless function 

// console.log(longestPalindromicSubString('bababa'))


function palindromicSubstring(s){
    let first = []
    let second = []
    let result = []
for(let i =0 ;i<s.length ; i++)
{
    for (let j = i ; j<s.length ; j++)
    {
        first.push(s.substring(i , j+1))
    }
}
for(let i=0 ; i<first.length ; i++)
{
    let s = ""
    let index = first[i].length-1
    for(let j =index ; j>=0 ; j--)
    {
       let char = first[i].charAt(j)
       s = s + char
    }
    second.push(s)
}
for(let i =0 ; i<first.length ; i++)
{
if(first[i] == second[i])
{
    result.push(second[i])
}
}
let num = []
for(let i = 0 ; i<result.length ; i++)
{
    num.push(result[i].length)
}

let maxlength = result[0].length
a= ""
for(let i =0 ; i<result.length ;i++)
{
    if(result[i].length>=maxlength)
    {
        maxlength = result[i].length
        a = result[i]
    }
}
return a
    }

// console.log(palindromicSubstring("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))


