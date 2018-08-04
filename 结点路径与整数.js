/* 题目：输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
         路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
         (注意: 在返回值的list中，数组长度大的数组靠前)

思路即为输入一个二叉树的结点，
判断条件为：当这个结点以及后续输入的结点的和  是否与  输入的整数expectNumber相等，
            且 满足这些结点是树的叶结点（根据路径的定义，从根结点一直到叶结点为一条路径）。
            若相等，打印出结点值，
            若不满足上述任一条件，利用递归继续进入dfefind函数判断，得到result值（即该结点有左右子结点，继续对该左右子结点进行判断）
            最后（path.pop()）弹出最后加入栈的结点，即回退到上一步，查找另一个分支是否满足条件。
 */
function FindPath(root, expectNumber)
{
    var result = [];
    if(root == null){
        return result;
    }
    dfsFind(root,expectNumber,0,[],result);
    return result;
}
function dfsFind(root,expectNumber,rootSum,path,result){
    rootSum += root.val;
    path.push(root.val);
    if(rootSum == expectNumber && root.left==null && root.right==null){
        result.push(path.slice(0));
    }
    if(root.left !== null){
        dfsFind(root.left,expectNumber,rootSum,path,result);
    }
    if(root.right !== null){
        dfsFind(root.right,expectNumber,rootSum,path,result);
    }
    path.pop();
}