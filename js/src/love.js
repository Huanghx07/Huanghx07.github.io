.mod - contentscript# formattingMsg {
    position: absolute;
    top: 0;
    font - size: 14px;
    color: #333;margin:5px;}# formattingMsg.x - loading {
        width: 12px;
        height: 12px;
        border: 1px solid# f00;
        border - radius: 50 % ;
        box - shadow: 0 0 10px 2px;
        color: #c00;
        border - right - color: transparent;
        border - top - color: transparent;
        animation: spin - right 1s linear infinite normal;
        animation - delay: 0s;
        margin: 0 5px 0 0;
        display: inline - block
    }#
    formattingMsg.x - loading: before {
        display: block;
        width: 8px;
        height: 8px;
        margin: 1px;
        border: 2px solid# f00;
        content: " ";
        border - radius: 50 % ;
        border - left - color: transparent;
        border - bottom - color: transparent
    }@
    keyframes spin - right {
        from {
            transform: rotate(0deg);
            opacity: .2
        }
        50 % {
            transform: rotate(180deg);
            opacity: 1.0
        }
        to {
            transform: rotate(360deg);
            opacity: .2
        }
    }