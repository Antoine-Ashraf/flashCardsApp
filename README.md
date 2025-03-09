# React Flashcards ⚛️  

### 🧠 **Technical Implementation**  
- **React State Management**: Utilizes `useState` for toggling card sides (question/answer) with conditional rendering  
- **Component Architecture**: Structured into reusable functional components (`App`, `FlashCards`, `Card`) following React best practices  
- **Data Mapping**: Dynamically renders cards using `Array.map()` on a predefined dataset of Q/A pairs  
- **Event Handling**: Implements click events for card interaction with proper state updates  
- **Conditional Styling**: Applies dynamic `className` based on card state (`selected` class for answer visibility)  
- **JSX Syntax**: Leverages React's XML-like syntax for declarative UI rendering  
- **Component Props**: Passes question data through props to child components  

### 🔑 **Key Features**  
- Static dataset with unique IDs for efficient rendering  
- State-driven UI updates without DOM manipulation  
- Clean separation of data (questions array) and presentation logic  
- Responsive card flip effect (assumes CSS implementation)  
- Minimalist design focused on React pedagogy  
