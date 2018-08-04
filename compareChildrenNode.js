
//输入两棵二叉树A，B，判断B是不是A的子结构。
// （ps：我们约定空树不是任意一个树的子结构）

function HasSubtree(pRoot1,pRoot2){
	if(!pRoot1 || !pRoot2){
		return false;
	}
	return isSubtree(pRoot1,pRoot2) || HasSubtree(pRoot1.right,pRoot2) || HasSubtree(pRoot1.right,pRoot2);
}
//第一步先在树1中遍历二叉树1，如果发现有结点与树2的头结点相同，则调用isSubtree来进一步判断
//第一步中也要注意边界条件的检查，比如树1与树2都为空时。
//在hasSubtree转化为结点值相等时用isSubtree方法递归，不相等时自身继续递归。采用分类递归思想。

function isSubtree(root1,root2){
	if(!root2){
		return true;
	}
	if(!root1){
		return false;
	}
	if(root1.val == root2.val){
		return isSubtree(root1.left,root2.left) || isSubtree(root1.right,root2.right);
	}else{
		return false;
	}
}
//树1子树为空时，树2就不是树1的子结构。树2的子树结点为空，只有一个根节点，那就是树1子结构。
//如果树1和树2的子树的值相等，则继续递归比较他们各自的左右结点值是否相等。一直递归到树1和树2的叶结点。