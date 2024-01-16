// font size function
const textArea= document.getElementById('textArea') ;
function f1(e){
    const value = e.value ;
    textArea.style.fontSize = value + "px"
    
}
// font color function
function f2(e){
    const value = e.value ;
    textArea.style.color = value ;
    
}
// upper and lower case function
document.getElementById("Aa").addEventListener('click' , function(){
    
        if(textArea.style.textTransform == "lowercase"){
            textArea.style.textTransform = "uppercase" ;
        }
        else
        {
            textArea.style.textTransform = "lowercase" ;
         
        }
})

//  Bold Button 

document.getElementById('bold').addEventListener('click' , function(){
    textArea.style.fontWeight = 'bold'

})
// italic button


document.getElementById('italic').addEventListener('click' , function(){
  textArea.style.fontStyle= 'italic'

})
// text decoration Underline button
document.getElementById('underline').addEventListener('click' , function(){
    textArea.style.textDecoration= 'underline'

})
// alignment : text align left
document.getElementById('align-left').addEventListener('click' , function(){
    textArea.style.textAlign= 'left'

})
// alignment : text align center
document.getElementById('align-center').addEventListener('click' , function(){
   textArea.style.textAlign= 'center'

})
// alignment : text align align-justify
document.getElementById('align-justify').addEventListener('click' , function(){
    textArea.style.textAlign= 'justify'

})
// alignment : text align right
document.getElementById('align-right').addEventListener('click' , function(){
    textArea.style.textAlign= 'right'

})
// colorfull text
document.getElementById('color').addEventListener('click' , function(){
    const textArea = document.getElementById('textArea') ;
    textArea.style.color= ''

})
document.getElementById('color').addEventListener('click' , function(){
    const textArea = document.getElementById('textArea') ;
    textArea.style.color= ''

})


