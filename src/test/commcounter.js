const commentcreate = (comments) => {
  let cntcomments = 0;
  comments.forEach((comm) => {
    const storecomment = document.createElement('div');
    cntcomments += 1;
    storecomment.classList.add('col-12');
    storecomment.innerHTML = `
            <div>
                userName: ${comm.username}
            </div>
            <div>
                userComment: ${comm.comment}
            </div>
        `;
  });
  const commcount = document.getElementById('comments-count');
  commcount.innerText = cntcomments;
};

export default commentcreate;