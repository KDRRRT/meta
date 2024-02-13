const sidebarLinks = document.querySelectorAll('.nav-link');
const divSections = document.querySelectorAll('.section');
const firstSideBar = document.querySelector('.active');



sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const sectionId = link.dataset.section;
    
    sidebarLinks.forEach((sidebarLink) => {
        sidebarLink.style.color = '#000';
        sidebarLink.style.backgroundColor = '';
      });

    firstSideBar.classList.remove('active');
      firstSideBar.style.color = '#000';

        link.style.backgroundColor = 'rgb(13, 110, 253)';
      link.style.color = 'rgb(255, 255, 255)'; 

    divSections.forEach((section) => {
      section.style.display = 'none';
      
    });

    document.getElementById(sectionId).style.display = 'block';

  });
});

const mainChoseLinks = document.querySelectorAll('.main_chose_link');
const divtables = document.querySelectorAll('.table');

mainChoseLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const tableId = link.dataset.table;
        mainChoseLinks.forEach((mainChoseLink) => {
            mainChoseLink.style.fontWeight = '';
          });
    
          link.style.fontWeight = '700';
    
        divtables.forEach((table) => {
          table.style.display = 'none';
          
        });
    
        document.getElementById(tableId).style.display = 'block';
    
      });
    });    


document.querySelector('#sell-link').addEventListener('click', () => {
    document.querySelector('#buy').style.display = 'none';
    document.querySelector('#sell').style.display = 'block';
});
document.querySelector('#buy-link').addEventListener('click', () => {
    document.querySelector('#sell').style.display = 'none';
    document.querySelector('#buy').style.display = 'block';
});

const mainChoseBlockLinks = document.querySelectorAll('.main_chose_block_link');
const divblocks = document.querySelectorAll('.tok');

mainChoseBlockLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const blockId = link.dataset.tok;
        mainChoseBlockLinks.forEach((mainChoseBlockLink) => {
            mainChoseBlockLink.style.fontWeight = '';
          });
    
          link.style.fontWeight = '700';
    
        divblocks.forEach((tok) => {
          tok.style.display = 'none';
          
        });
    
        document.getElementById(blockId).style.display = 'flex';
    
      });
    }); 

    const sChoseLinks = document.querySelectorAll('.s_chose');
    const divitems = document.querySelectorAll('.senditem');
    
    sChoseLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const itemId = link.dataset.senditem;
            sChoseLinks.forEach((sChoseLink) => {
                sChoseLink.style.fontWeight = '';
              });
        
              link.style.fontWeight = '700';
        
            divitems.forEach((senditem) => {
              senditem.style.display = 'none';
              
            });
        
            document.getElementById(itemId).style.display = 'flex';
        
          });
        }); 

        const histLinks = document.querySelectorAll('.modal_hist_link');
       histLinks.forEach((link) => {
            link.addEventListener('click', () => {

                histLinks.forEach((histLink) => {
                    histLink.style.fontWeight = '';
                  });
            
                  link.style.fontWeight = '700';
          
              });
            });



document.querySelector('#theme_toggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
  }
  else {
      localStorage.setItem('theme','dark');
  }
  addDarkClass();
  })
  function addDarkClass () {
     try {
      if (localStorage.getItem('theme') === 'dark') {
          document.querySelector('html').classList.add('dark');
          document.querySelector('#theme_toggle').textContent = 'Light theme';

      }
  else {
      document.querySelector('html').classList.remove('dark');
          document.querySelector('#theme_toggle').textContent = 'Dark theme';

  }
  } catch(err) {} 
  }
  addDarkClass();



const button = document.querySelector('.pop');
const items = document.querySelectorAll('.country');

items.forEach(item => {
  item.addEventListener('click', () => {

    button.textContent = item.querySelector('.country_ic').textContent;
  });
});

const buttonCur = document.querySelector('.cur');
const curitems = document.querySelectorAll('.currency');

curitems.forEach(item => {
  item.addEventListener('click', () => {

    buttonCur.textContent = item.querySelector('.country_ic').textContent;
  });
});

const but2 = document.querySelector('.p2');
const butc2 = document.querySelector('.c2');
const pop2items = document.querySelectorAll('.pop2');
const cur2items = document.querySelectorAll('.cur2');
popup = document.querySelectorAll('.popup');
pop2items.forEach(item => {
  item.addEventListener('click', () => {
    but2.textContent = item.querySelector('.country_ic').textContent;
  });
});
cur2items.forEach(item => {
  item.addEventListener('click', () => {
    
    butc2.textContent = item.querySelector('.country_ic').textContent;
    
  });
});




const mobile = document.querySelector('.mobile_side');
mobile.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'flex';
})
const mobile1 = document.querySelector('.mobile_side1');
mobile1.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'flex';
})
const mobile2 = document.querySelector('.mobile_side2');
mobile2.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'flex';
})
const mobile3 = document.querySelector('.mobile_side3');
mobile3.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'flex';
})
const mobile4 = document.querySelector('.mobile_side4');
mobile4.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'flex';
})
const mobile5 = document.querySelector('.mobile_side5');
mobile5.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'flex';
})
const mobile6 = document.querySelector('.mobile_side6');
mobile6.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'flex';
})
const closeSide = document.querySelector('.side-close');
closeSide.addEventListener('click', () => {
  document.querySelector('.sidebar').style.display = 'none';
})
