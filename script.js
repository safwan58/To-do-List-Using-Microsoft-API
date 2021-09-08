
const accessToken =
  'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkdZOW81WkQwcWtuTGRjR1dmbUJ4M0s2S0p6dkNhaThQY05rQm5NQl9lUmMiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8wZjA5OTcyZC03ZTQ4LTRkZWItYTJkOS0yOGRjZWU3ZGVhODIvIiwiaWF0IjoxNjMxMTMwMDc4LCJuYmYiOjE2MzExMzAwNzgsImV4cCI6MTYzMTEzMzk3OCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFVUUF1LzhUQUFBQWZMVi9jSU5TZHRQV2cyTDAxeUVaMTlOVG1tV1NlcHRZOGNaS2kyTXFDL2hLaG0xNzg5d01zcXdCTUpMSnVqcjY0Z2pHSGhIenZXZDh6amZxbVkyNFZnPT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkFITUFEIiwiZ2l2ZW5fbmFtZSI6IlNBRldBTiIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjE1Ny4zNS45NS4yMzciLCJuYW1lIjoiU0FGV0FOIEFITUFEIiwib2lkIjoiMTI4MGZlYTAtMjU0NS00M2E3LTg4NDItMzhkZDFiY2UyYTBkIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTQ1MjIwNTk3MC0zODA0ODk5NDczLTE0ODU3MTIxNDAtNDAzNDAiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDE2RjdFQTQ5RiIsInJoIjoiMC5BWElBTFpjSkQwaC02MDJpMlNqYzduM3FnclhJaTk3NTJiRklxSzIzU05weVVHUnlBTzguIiwic2NwIjoib3BlbmlkIHByb2ZpbGUgVGFza3MuUmVhZFdyaXRlIFVzZXIuUmVhZCBlbWFpbCIsInN1YiI6InZyU3dHXzhQZFB6ZHhFTUpfS3lqSzVkSnlWeG9qeHFicGRTeUtJeGJNcWMiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiIwZjA5OTcyZC03ZTQ4LTRkZWItYTJkOS0yOGRjZWU3ZGVhODIiLCJ1bmlxdWVfbmFtZSI6InNhZndhbi5haG1hZEBuZXdnZW4uY28uaW4iLCJ1cG4iOiJzYWZ3YW4uYWhtYWRAbmV3Z2VuLmNvLmluIiwidXRpIjoiSlhySWt1cmVra212X2hHMEZqZDFBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19zdCI6eyJzdWIiOiJuTXBPMlFleUNVSlpMbGFmZDFwcms3OFBuTm5UZ2NSZTlWUWNrTFNfUmdRIn0sInhtc190Y2R0IjoxNDIzMTI3NjQ4fQ.Lgk1Ef_Qvi0_CRZ4MUrJfFS0DnufPBQPFCEvp6ixXw2CRzb_VATGC_GLRHLyzDFKTX1Boho58ljvgqkirKaOguLMlJbJksZzxR6L897h22Fq5BVCMPMEZAjiz9FJ8KyJ5BdjhxasE6qXsma77WbPGDkEdlVNWC70oqFDVbUI_m4JkcLM_IsCfy1OSnkRExLIopYVIKCdh4dzE-0fqxHuFJX-Zsyxb1iBoLGpPkIDOHk-ADfWxN21uPJyTp7OOS35YkPyLB4SBvZtfXyLvpuvIdl8iGV2zlzx7qUccp8qH4ovaXdGlE7FY6coGoAUcjMLcQAOgoZQ8ATYxGXceT28uw';

let listId;
const ul=document.querySelector('ul');

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

const getUserList=(listId)=>{
 
  let url='https://graph.microsoft.com/v1.0/me/todo/lists/'+listId+'/tasks';
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
}

const getUserListDisplayed=(items)=>{
  items.forEach(item=>{
    //console.log(item.title);

    const li=document.createElement('li')
    const p=document.createElement('p');
    ul.appendChild(li);
    li.appendChild(p);
    p.innerHTML=item.title;
  })
}

//console.log(listId);

//const listUrl='https://graph.microsoft.com/v1.0/me/todo/lists/'+userId+'/tasks';
///////////////////////////////////////////////////////////////////////////////////////

const btn=document.querySelector('button');
btn.addEventListener('click',window.function=()=>{
  const task=document.getElementById('box').value;

  let url='https://graph.microsoft.com/v1.0/me/todo/lists/'+listId+'/tasks';
  //console.log(url);

  let requestData = {
    'title': task
  };


const xhttpPost = new XMLHttpRequest();
xhttpPost.open('POST', url);
xhttpPost.setRequestHeader('content-type', 'application/json');
xhttpPost.setRequestHeader('Authorization', accessToken);
// console.log(JSON.stringify(requestData));

xhttpPost.send(JSON.stringify(requestData));
getUserList(listId);

})



//xhttpPost.send(JSON.stringify(requestData));


// const postTask=(listId)=>{
//   let url='https://graph.microsoft.com/v1.0/me/todo/lists/'+listId+'/tasks';
//   //console.log(url);

//   let requestData = {
//     'title': 'Maxie'
//   };


// const xhttpPost = new XMLHttpRequest();
// xhttpPost.open('POST', url);
// xhttpPost.setRequestHeader('content-type', 'application/json');
// xhttpPost.setRequestHeader('Authorization', accessToken);
// // console.log(JSON.stringify(requestData));

// xhttpPost.send(JSON.stringify(requestData));

// }



// xhttpPost.onreadystatechange = () => {
//   if (xhttpPost.readyState == 4) {
//     console.log(xhttpPost.response);
//   }
// };
