import React, { Component } from "react";

export const mainColorsBox = ["#ea0f00", "#00bcd4", "#ff5722", "#16b71d", "#009688", "#0d6efd", "#9c27b0", "#198754" ]

export const mainColor = Math.floor(Math.random() * (mainColorsBox.length))

export class Point extends Component {
    render() {
    return (
        <svg
        className="iconPoint"
        viewBox="0 0 120 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        >
        <circle class="point" cx="60" cy="60" r="50" />
        </svg>
    );
    }
}

export class IconHome extends Component {
    render() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="iconHome"
            viewBox="0 0 24 24"
            width="384px"
            height="384px"
        >
        <path
            fill="none"
            stroke="#ffffff"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M19,11v9h-5v-6h-4v6H5v-9H3.606L12,3.445L20.394,11H19z"
        />
        </svg>
    );
    }
}

export class IconArrow extends Component {
    render() {
        return (
            <svg
            className="iconArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="384px"
            height="384px"
            viewBox="0 0 448.011 448.011"
            >
        
                <path
                fill="#f00f00"
                d="M438.731,209.463l-416-192c-6.624-3.008-14.528-1.216-19.136,4.48c-4.64,5.696-4.8,13.792-0.384,19.648l136.8,182.4
                l-136.8,182.4c-4.416,5.856-4.256,13.984,0.352,19.648c3.104,3.872,7.744,5.952,12.448,5.952c2.272,0,4.544-0.48,6.688-1.472
                l416-192c5.696-2.624,9.312-8.288,9.312-14.528S444.395,212.087,438.731,209.463z"
                />
        
            </svg>
        );
	}
}

export class IconLista extends Component {
    render() {
        return(
            <svg id="iconLista" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
        )
    }
}

export class IconGallery extends Component{
    render() {
        return (
            <svg id="iconGallery" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m6.25 19.5c-1.601 0-3.025-1.025-3.542-2.551l-.035-.115c-.122-.404-.173-.744-.173-1.084v-6.818l-2.426 8.098c-.312 1.191.399 2.426 1.592 2.755l15.463 4.141c.193.05.386.074.576.074.996 0 1.906-.661 2.161-1.635l.901-2.865z"/></g><path d="m9 9c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2z"/></g><path d="m21.5 2h-15c-1.378 0-2.5 1.122-2.5 2.5v11c0 1.378 1.122 2.5 2.5 2.5h15c1.378 0 2.5-1.122 2.5-2.5v-11c0-1.378-1.122-2.5-2.5-2.5zm-15 2h15c.276 0 .5.224.5.5v7.099l-3.159-3.686c-.335-.393-.82-.603-1.341-.615-.518.003-1.004.233-1.336.631l-3.714 4.458-1.21-1.207c-.684-.684-1.797-.684-2.48 0l-2.76 2.759v-9.439c0-.276.224-.5.5-.5z"/></svg>
        )
    }
}

export class IconUser extends Component{
    render() {
        return (
            <svg className="iconUser" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"/></svg>
        )
    }
}

export class IconEdit extends Component{
    render() {
        return(
            <svg id="iconEdit" xmlns="http://www.w3.org/2000/svg" height="401pt" viewBox="0 -1 401.52289 401" width="401pt"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>
        )
    }
}

export class IconEdit2 extends Component{
    render() {
        return(
            <svg id="iconEdit2" xmlns="http://www.w3.org/2000/svg" height="401pt" viewBox="0 -1 401.52289 401" width="401pt"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>
        )
    }
}

export class IconLog extends Component{
    render(){
        return(
            <svg id="iconLog" xmlns="http://www.w3.org/2000/svg" version="1.1"  x="0px" y="0px" width="548.291px" height="548.291px" viewBox="0 0 548.291 548.291"  >
                <g>
                    <g>
                        <path d="M256.08,417.128c-18.09,0-28.625,17.209-28.625,40.21c0,23.183,10.885,39.52,28.795,39.52    c18.09,0,28.447-17.209,28.447-40.216C284.702,435.392,274.522,417.128,256.08,417.128z"/>
                        <path d="M472.929,131.39c-0.031-2.514-0.829-4.997-2.556-6.96L364.656,3.677c-0.021-0.034-0.053-0.044-0.084-0.075    c-0.63-0.704-1.354-1.284-2.132-1.796c-0.23-0.149-0.462-0.283-0.703-0.419c-0.683-0.365-1.387-0.667-2.121-0.888    c-0.2-0.058-0.377-0.139-0.577-0.191C358.231,0.113,357.411,0,356.572,0H96.757C84.904,0,75.255,9.649,75.255,21.502V526.79    c0,11.858,9.649,21.501,21.502,21.501h354.775c11.863,0,21.503-9.643,21.503-21.501V132.595    C473.036,132.191,472.971,131.795,472.929,131.39z M195.477,516.164h-73.93V397.812h26.867v95.88h47.063V516.164z     M254.853,518.101c-35.124,0-55.667-26.515-55.667-60.226c0-35.481,22.651-61.996,57.596-61.996    c36.355,0,56.198,27.219,56.198,59.886C312.98,494.568,289.452,518.101,254.853,518.101z M429.433,510.726    c-8.263,2.808-23.884,6.672-39.518,6.672c-21.596,0-37.229-5.443-48.115-15.979c-10.889-10.188-16.856-25.643-16.683-43.028    c0.177-39.335,28.792-61.817,67.611-61.817c15.276,0,27.041,2.992,32.835,5.794l-5.617,21.43    c-6.492-2.814-14.571-5.093-27.569-5.093c-22.305,0-39.161,12.647-39.161,38.279c0,24.408,15.282,38.813,37.234,38.813    c6.142,0,11.056-0.704,13.166-1.753v-24.762h-18.258v-20.897h44.074V510.726L429.433,510.726z M96.757,365.081V21.502H345.82    v110.011c0,5.935,4.81,10.751,10.752,10.751h94.961l0.011,222.816H96.757z"/>
                    </g>
                    <g>
                        <path d="M355.221,91.376h-15.229v25.985c0,4.699-3.81,8.509-8.508,8.509c-4.705,0-8.51-3.811-8.51-8.509V91.376h-26.878v25.985    c0,4.699-3.81,8.509-8.508,8.509c-4.703,0-8.51-3.811-8.51-8.509V91.376h-33.155v25.985c0,4.699-3.811,8.509-8.51,8.509    c-4.703,0-8.509-3.811-8.509-8.509V91.376h-26.877v25.985c0,4.699-3.811,8.509-8.51,8.509c-4.703,0-8.509-3.811-8.509-8.509    V91.376h-7.165c-8.906,0-16.126,7.218-16.126,16.127v209.641c0,8.907,7.221,16.126,16.126,16.126h177.387    c8.909,0,16.127-7.219,16.127-16.126V107.503C371.348,98.595,364.13,91.376,355.221,91.376z M357.915,317.149H171.566V155.887    h186.349V317.149z"/>
                        <path d="M202.023,88.689c0-4.698-3.811-8.509-8.51-8.509c-4.703,0-8.509,3.811-8.509,8.509v2.688h17.024v-2.688H202.023z"/>
                        <path d="M245.924,88.689c0-4.698-3.811-8.509-8.51-8.509c-4.703,0-8.509,3.811-8.509,8.509v2.688h17.024v-2.688H245.924z"/>
                        <path d="M296.092,88.689c0-4.698-3.811-8.509-8.508-8.509c-4.705,0-8.511,3.811-8.511,8.509v2.688h17.023v-2.688H296.092z"/>
                        <path d="M339.993,88.689c0-4.698-3.81-8.509-8.508-8.509c-4.705,0-8.51,3.811-8.51,8.509v2.688h17.023v-2.688H339.993z"/>
                        <path d="M193.514,186.795h137.971c1.485,0,2.688-1.205,2.688-2.688s-1.202-2.688-2.688-2.688H193.514    c-1.483,0-2.688,1.205-2.688,2.688S192.031,186.795,193.514,186.795z"/>
                        <path d="M193.514,218.15h137.971c1.485,0,2.688-1.205,2.688-2.688s-1.202-2.688-2.688-2.688H193.514    c-1.483,0-2.688,1.205-2.688,2.688S192.031,218.15,193.514,218.15z"/>
                        <path d="M193.514,254.885h137.971c1.485,0,2.688-1.204,2.688-2.688s-1.202-2.688-2.688-2.688H193.514    c-1.483,0-2.688,1.205-2.688,2.688S192.031,254.885,193.514,254.885z"/>
                        <path d="M193.514,286.241h137.971c1.485,0,2.688-1.208,2.688-2.688s-1.202-2.688-2.688-2.688H193.514    c-1.483,0-2.688,1.207-2.688,2.688S192.031,286.241,193.514,286.241z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        )
    }
}