const allImg = document.getElementsByTagName('img'),
      next = document.querySelector('.next-btn'),
      prev = document.querySelector('.prev-btn'),
      title = document.querySelector('.title'),
      count = document.querySelector('.count'),
      speedInput = document.querySelector('.input-speed'),
      btnInp = document.querySelector('.btn'),
      container = document.querySelector('.container'),
      createSlideInput = document.querySelector('.create-input'),
      createSlideBtn = document.querySelector('.add__new-slider'),
      stopBtn = document.querySelector('.stop')


 let slideIndex = 1
 let intervalId = null


      function createNewSlider(){
        let div = document.createElement('div')
    
        div.classList.add('img-container')
    
        div.innerHTML += `
        <img src = ${createSlideInput.value} alt="Photo Slider" class = 'img-slider img-${allImg.length + 1}'>
        </div>
        `

        if(allImg.length < 10)
    {
         count.textContent = `0${allImg.length}`
         title.textContent = `0${slideIndex + 1}`
    }
    else{
         count.textContent = allImg.length
         title.textContent = `${slideIndex + 1}`
    }
    
        container.append(div)
    }

 if(allImg.length < 10)
 {
      count.textContent = `0${allImg.length}`
      title.textContent = `0${slideIndex}`
 }
 else{
      count.textContent = allImg.length
      title.textContent = `${slideIndex}`
 }

createSlideBtn.addEventListener('click',() => {
    createNewSlider()
    createSlideInput.value = ''
})

function nextSlideFn(){
    document.querySelector('.img-slider.show').classList.remove('show')
    const imgs = document.querySelector(`.img-${slideIndex}`)
    imgs.classList.add('show')
    slideIndex++

    if(allImg.length < 10)
    {
         count.textContent = `0${allImg.length}`
         title.textContent = `0${slideIndex - 1}`
    }
    else{
         count.textContent = allImg.length
         title.textContent = `${slideIndex - 1}`
    }

    if(slideIndex > allImg.length)
    {
        slideIndex = 1
    }
}

function prevSlideFn(){
    document.querySelector('.img-slider.show').classList.remove('show')
    const imgs = document.querySelector(`.img-${slideIndex}`)
    imgs.classList.add('show')
    slideIndex--

    if(allImg.length < 10)
    {
         count.textContent = `0${allImg.length}`
         title.textContent = `0${slideIndex + 1}`
    }
    else{
         count.textContent = allImg.length
         title.textContent = `${slideIndex + 1}`
    }

    if(slideIndex < 1)
    {
        slideIndex = allImg.length
    }
}

function timeSlider()
{
    if(+speedInput.value >= 500 && +speedInput.value <= 10000)
    {
        intervalId = setInterval(() => {
            nextSlideFn()
         },+speedInput.value)
    }
}

btnInp.addEventListener('click',() => {
    timeSlider()
    speedInput.value = ''
})

next.addEventListener('click',() => {
    nextSlideFn()
})

prev.addEventListener('click',() => {
    prevSlideFn()
})

stopBtn.addEventListener('click',() => {
     clearInterval(intervalId)
})

