const accessToken =
  'eyJ0eXAiOiJKV1QiLCJub25jZSI6IngxTFc1UjI1czZ2QTF2dW1fWjFEYlFkTEZtSEszSkdoNko2QTRFcERrVlUiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wZjA5OTcyZC03ZTQ4LTRkZWItYTJkOS0yOGRjZWU3ZGVhODIvIiwiaWF0IjoxNjMxMTgxMjI0LCJuYmYiOjE2MzExODEyMjQsImV4cCI6MTYzMTE4NTEyNCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQW5kZzJmbkhicG9XOVBtSXB3TkhiN05pTWNuTDNmd2R0SXpNNmZZWDJxbkR6MEIrVUdnV3R5QmV5K1BUcU1YV2dxQkFvY0dTcUlCRStuUGErL1BhaDdnPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkFITUFEIiwiZ2l2ZW5fbmFtZSI6IlNBRldBTiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjE1Ny4zNS45Mi4yMDAiLCJuYW1lIjoiU0FGV0FOIEFITUFEIiwib2lkIjoiMTI4MGZlYTAtMjU0NS00M2E3LTg4NDItMzhkZDFiY2UyYTBkIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTQ1MjIwNTk3MC0zODA0ODk5NDczLTE0ODU3MTIxNDAtNDAzNDAiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDE2RjdFQTQ5RiIsInJoIjoiMC5BWElBTFpjSkQwaC02MDJpMlNqYzduM3FnclhJaTk3NTJiRklxSzIzU05weVVHUnlBTzguIiwic2NwIjoib3BlbmlkIHByb2ZpbGUgVGFza3MuUmVhZFdyaXRlIFVzZXIuUmVhZCBlbWFpbCIsInN1YiI6InZyU3dHXzhQZFB6ZHhFTUpfS3lqSzVkSnlWeG9qeHFicGRTeUtJeGJNcWMiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiIwZjA5OTcyZC03ZTQ4LTRkZWItYTJkOS0yOGRjZWU3ZGVhODIiLCJ1bmlxdWVfbmFtZSI6InNhZndhbi5haG1hZEBuZXdnZW4uY28uaW4iLCJ1cG4iOiJzYWZ3YW4uYWhtYWRAbmV3Z2VuLmNvLmluIiwidXRpIjoicVEwUDlRZy1BVTYtZTVyM2I1MjZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJuTXBPMlFleUNVSlpMbGFmZDFwcms3OFBuTm5UZ2NSZTlWUWNrTFNfUmdRIn0sInhtc190Y2R0IjoxNDIzMTI3NjQ4fQ.Gq1bciTN6_SD6Hu3pEyBGtC2xwkhFCpKjcWuujt3ZYd4VxB3hauhkcW9otMHQ1sVHZ_6HMos6eTtyXVRIRlBQQ0FUI1KGdGnoKgCySwJgA89LN9D98DE9sCPklXgdXMk9dyFM5d1nhTf-Y2uf9oOlAtAeEXytQuLu_RbSYJWcrtsxngmbQk1qzKkgkUq1FE7QAs2v7Zsut4HgQr6uA9LvzIGuEmyW1iZeWsIIgsOF9Vkzb02BwowqsUM3a2gNBqsebIa_K6gRS4sosWQEViOHVPCHMXhs9aivKfXmPrnjCOXs_Ap54xjy7c2Fe-Bck8Y8RpFwsXUAVnvIJ-gwJiE8g';

let listId;
const ul = document.querySelector('ul');

//function getListID() {
const xhttp = new XMLHttpRequest();
const url = 'https://graph.microsoft.com/v1.0/me/todo/lists';

xhttp.open('GET', url); //make connection
xhttp.setRequestHeader('content-type', 'application/json');
xhttp.setRequestHeader('Authorization', accessToken);
xhttp.send();

xhttp.onreadystatechange = () => {
  let userData;

  //console.log(xhttp.readyState);
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    //console.log(xhttp.response);
    userData = JSON.parse(xhttp.response); //converting Json data to javascript data format
    //console.log(userData.value[0].id);
    listId = userData.value[0].id;
    //console.log(listId);
    getUserList(listId);
    // postTask(listId);
  }
};
//}

//getListID();

const getUserList = listId => {
  let url =
    'https://graph.microsoft.com/v1.0/me/todo/lists/' + listId + '/tasks';
  //console.log(url);

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', url); //make connection
  xhttp.setRequestHeader('content-type', 'application/json');
  xhttp.setRequestHeader('Authorization', accessToken);
  xhttp.send();

  xhttp.onreadystatechange = () => {
    let userData;

    //console.log(xhttp.readyState);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      // console.log(xhttp.response);
      userData = JSON.parse(xhttp.response); //converting Json data to javascript data format
      //console.log(userData.value[1].title);

      getUserListDisplayed(userData.value);
    }
  };
};

const getUserListDisplayed = (items) => {
  items.forEach(item => {
    //console.log(item.title);

    const li = document.createElement('li');
    const span = document.createElement('span');
    const inp = document.createElement('input');
    const br = document.createElement('br');
    inp.setAttribute('type', 'checkbox');
    inp.setAttribute('class', 'inpcls');
    //p.setAttribute("class","pcls");

    ul.appendChild(li);
    li.appendChild(inp);
    li.appendChild(span);
    li.appendChild(br);

    span.innerHTML = item.title;
    if(item.status=="completed"){
      inp.setAttribute('checked','true');
      span.style.textDecoration='line-through';
    }
///////////////
   
//////////////

  });
 
};

//console.log(listId);



//const listUrl='https://graph.microsoft.com/v1.0/me/todo/lists/'+userId+'/tasks';
///////////////////////////////////////////////////////////////////////////////////////

const btn = document.querySelector('button');
btn.addEventListener(
  'click',
  (window.function = () => {
    const task = document.getElementById('box').value;

    let url =
      'https://graph.microsoft.com/v1.0/me/todo/lists/' + listId + '/tasks';
    //console.log(url);

    let requestData = {
      title: task
    };

    const xhttpPost = new XMLHttpRequest();
    xhttpPost.open('POST', url);
    xhttpPost.setRequestHeader('content-type', 'application/json');
    xhttpPost.setRequestHeader('Authorization', accessToken);
    // console.log(JSON.stringify(requestData));

    xhttpPost.send(JSON.stringify(requestData));

    location.reload(true);
  })
);

///////////////////////////////////////////////////////////////////////////////
