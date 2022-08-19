class EdgeArrowSource extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="ea-dropdown-area" class="ea-dropdown-area">
                <select id="ea-source-dropdown-list" class="ea-source-dropdown-list" onChange=updateSourceArrowShape(value) title="edge-arrow-shape-dropdown">
                    <option selected hidden class="dropdown-item">All Source Arrows</option>
                    <option value="circle" class="dropdown-item">Circle</option>
                    <option value="circle-triangle" class="dropdown-item">Circle Triangle</option>
                    <option value="chevron" class="dropdown-item">Chevron</option>
                    <option value="diamond" class="dropdown-item">Diamond</option>
                    <option value="tee" class="dropdown-item">Tee</option>
                    <option value="triangle" class="dropdown-item">Triangle</option>
                    <option value="triangle-backcurve" class="dropdown-item">Triangle Backcurve</option>
                    <option value="triangle-cross" class="dropdown-item">Triangle Cross</option>
                    <option value="triangle-tee" class="dropdown-item">Triangle Tee</option>
                    <option value="square" class="dropdown-item">Square</option>
                    <option value="vee" class="dropdown-item">Vee</option>
                    <option value="none" class="dropdown-item">None</option>
                </select>
            </div>
        `;

        sourceArrowDropdown = document.getElementById('ea-source-dropdown-list');
        sourceArrow = sourceArrowDropdown.options[sourceArrowDropdown.selectedIndex].value;

    }
}

let sourceArrow;
let sourceArrowDropdown;

function updateSourceArrowShape(edgeArrow) {
    cy.style().selector('edge').style('source-arrow-shape', edgeArrow).update();
}

customElements.define('edge-arrow-source', EdgeArrowSource);