$(function () {
    $('#sidebar-toggle').on('click', function () {
        $('#sidebarContainer').toggleClass('d-none d-md-block');
    });

});

const links = [
    { label: "Link 1", url: "#" },
    { label: "Dropdown 1", url: "#", sublinks: [
      { label: "Sublink 1", url: "#" },
      { label: "Sublink 2", url: "#" },
      { label: "Sublink 3", url: "#" }
    ]},
    { label: "Link 2", url: "#" },
    { label: "Link 3", url: "#" },
    { label: "Dropdown 2", url: "#", sublinks: [
      { label: "Sublink 4", url: "#" },
      { label: "Sublink 5", url: "#" },
      { label: "Sublink 6", url: "#" }
    ]}
  ];
  
  // Sort the links alphabetically by label
  links.sort((a, b) => a.label.localeCompare(b.label));
  
  // Create the menu items and add them to the DOM
  const sidebar = document.getElementById('sidebarContainer');
  const list = sidebar.querySelector('ul');
  links.forEach(link => {
    const item = document.createElement('li');
    if (link.sublinks) {
      item.classList.add('dropdown');
      const dropdownToggle = document.createElement('a');
      dropdownToggle.classList.add('dropdown-toggle');
      dropdownToggle.setAttribute('href', link.url);
      dropdownToggle.textContent = link.label;
      dropdownToggle.setAttribute('data-toggle', 'dropdown');
      dropdownToggle.setAttribute('aria-haspopup', 'true');
      dropdownToggle.setAttribute('aria-expanded', 'false');
      item.appendChild(dropdownToggle);
      const dropdownMenu = document.createElement('ul');
      dropdownMenu.classList.add('dropdown-menu');
      link.sublinks.forEach(sublink => {
        const subitem = document.createElement('li');
        const sublinkElem = document.createElement('a');
        sublinkElem.setAttribute('href', sublink.url);
        sublinkElem.textContent = sublink.label;
        subitem.appendChild(sublinkElem);
        dropdownMenu.appendChild(subitem);
      });
      item.appendChild(dropdownMenu);
    } else {
      const linkElem = document.createElement('a');
      linkElem.setAttribute('href', link.url);
      linkElem.textContent = link.label;
      item.appendChild(linkElem);
    }
    list.appendChild(item);
  });
  