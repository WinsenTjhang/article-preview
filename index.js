// Close popup when clicking outside element 

function togglePopup() {
    $('.speech-bubble-wrap').toggleClass('open');
}

function hidePopup() {
    $('.speech-bubble-wrap').removeClass('open');
}

// Method 1, used class="blocker" div element with css (fixed container) and javascript

// Method 2, pure javascript

$(document).on('click', function (event) {
    if (!$(event.target).closest('.circle-icon').length) {
        hidePopup();
    }
})