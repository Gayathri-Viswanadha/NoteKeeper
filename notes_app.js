const addBtn = document.getElementById('add');
const notesContainer = document.getElementById('notes-container');
const fontSelect = document.getElementById('fontSelect');
const highlightSelect = document.getElementById('highlightSelect');

// Function to create a new note
function createNote() {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
      <button class="highlight"><i class="fas fa-highlighter"></i></button>
      <button class="bullets"><i class="fas fa-list-ul"></i></button>
    </div>
    <div class="content" contenteditable="true" placeholder="Write your note here..."></div>
  `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const highlightBtn = note.querySelector('.highlight');
  const bulletsBtn = note.querySelector('.bullets');
  const contentDiv = note.querySelector('.content');

  // Edit Button
  editBtn.addEventListener('click', () => {
    contentDiv.focus();
  });

  // Delete Button
  deleteBtn.addEventListener('click', () => {
    note.remove();
  });

  // Highlight Button
  highlightBtn.addEventListener('click', () => {
    const selectedHighlight = highlightSelect.value;
    contentDiv.className = `content highlight-${selectedHighlight}`;
  });

  // Bullets Button
  bulletsBtn.addEventListener('click', () => {
    const isBulleted = contentDiv.style.listStyleType === 'disc';
    contentDiv.style.listStyleType = isBulleted ? 'none' : 'disc';
    contentDiv.innerHTML = `<ul><li>${contentDiv.innerHTML.replace(/\n/g, '</li><li>') + '</li>'}</ul>`;
  });

  notesContainer.appendChild(note);
}

// Add New Note
addBtn.addEventListener('click', () => createNote());

// Apply Font Change
fontSelect.addEventListener('change', () => {
  const selectedFont = fontSelect.value;
  document.querySelectorAll('.note .content').forEach(contentDiv => {
    contentDiv.style.fontFamily = selectedFont;
  });
});
