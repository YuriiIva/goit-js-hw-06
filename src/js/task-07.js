const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};

refs.input.addEventListener('input', () => {
    const size = refs.input.value;
    refs.span.style.fontSize =`${size}px`;
});


