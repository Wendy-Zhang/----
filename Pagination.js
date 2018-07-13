function pagination(total, current) {
        var ele=document.getElementById('jsPagination');
        //for demo1
        if(current-2>=1&&current+2<=total)
        {
            var page=ele.firstChild.nextSibling;
            if(current-2==1){
                page.className='hide';
            }
            for(var i=current-2,p=current-2;i<=current+2;p++,i++)
            {
                page=page.nextSibling.nextSibling;
                // page=page.nextSibling;
                page.innerHTML=i;
                if(i==current){
                    page.className='current';
                }
            }
            if(current+2==total)
            {
                var last=page.nextSibling.nextSibling;
                last.className='hide';
            }
        }
        //for demo2
        else if(total==0)
        {
            ele.className='pagination hide';
        }
        //for demo3
        else if(total<=5)
        {
            var fir=ele.firstChild.nextSibling;
            alert(fir);
            fir.className='hide';
            var page=fir;
            for(var i=1;i<=5;i++) {
                page = page.nextSibling.nextSibling;
                if (i <= total) {
                    page.innerHTML=i;
                    if(i==current)
                        page.className='current';
                }
                else
                {
                    page.className='hide';
                }
 
            }
            var last=page.nextSibling.nextSibling;
            last.className='hide';
        }
        //for demo4
        else if(current-2<=0)
        {
            var page=ele.firstChild.nextSibling;
            page.className='hide';
            for(var i=1;i<=5;i++) {
                page = page.nextSibling.nextSibling;
                page.innerHTML=i;
                    if(i==current){
                        page.className='current';
                    }
            }
 
        }
        //for demo5
        else if(current+2>total)
        {
            var page=ele.firstChild.nextSibling;
            for(var i=total-4;i<=total;i++) {
                page = page.nextSibling.nextSibling;
                page.innerHTML=i;
                if(i==current)
                    page.className='current';
            }
            var last=page.nextSibling.nextSibling;
            last.className='hide';
 
        }
    }