# MOS Practice Sandbox 🎯

A comprehensive Microsoft Office Specialis## 🚀 **Deployment on Vercel**

### **Quick Deploy**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/MOS-practicesandbox)

### **Manual Deployment Steps:**

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click "Deploy"

3. **Environment Variables** (if needed):
   - Add any environment variables in Vercel dashboard
   - Variables should start with `VITE_` prefix

### **Custom Domain (Optional)**:
- Go to your project settings in Vercel
- Add your custom domain under "Domains"
- Configure DNS records as instructed

## 📊 **Enhanced Features**

### **Comprehensive Question Bank**
- **25 realistic questions** across all Office applications
- **Three difficulty levels**: Beginner, Intermediate, Advanced
- **Detailed scenarios** matching real MOS exam conditions
- **Time limits** that simulate actual certification testing

### **Advanced Scoring System**
- **Weighted scoring** based on question difficulty
- **Performance breakdown** by skill level
- **Intelligent feedback** with personalized recommendations
- **Visual progress indicators** and detailed analytics

### **Professional Features**
- **Mobile-responsive** design for all devices
- **Fast loading** with optimized Vite build
- **SEO optimized** with proper meta tags
- **Professional UI/UX** matching Microsoft design standardsS) certification practice test application that simulates the real testing environment to help users prepare for their MOS certification exams.

## Features ✨

- **Multi-Application Support**: Practice tests for Word, Excel, PowerPoint, and Outlook
- **Realistic Test Environment**: Timed tests with authentic MOS-style questions
- **Progress Tracking**: Monitor your improvement and identify areas for study
- **Interactive UI**: Modern, responsive design with Microsoft Office styling
- **Detailed Results**: Comprehensive score analysis and question review
- **Multiple Difficulty Levels**: Beginner, intermediate, and advanced questions

## Applications Covered 📚

### Microsoft Word
- Document formatting and styles
- Table creation and formatting
- Mail merge functionality
- Headers, footers, and page layout

### Microsoft Excel
- Formula creation and functions
- Chart and graph creation
- Pivot tables and data analysis
- Cell formatting and conditional formatting

### Microsoft PowerPoint
- Slide design and themes
- Animation and transition effects
- Master slide customization
- Multimedia integration

### Microsoft Outlook
- Email organization and rules
- Calendar management
- Contact groups and management
- Task and appointment scheduling

## Getting Started 🚀

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/MOS-practicesandbox.git
cd MOS-practicesandbox
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage Guide 📖

1. **Home Page**: Overview of features and your progress statistics
2. **Test Selection**: Choose which Microsoft Office application to practice
3. **Practice Test**: Take timed tests with realistic scenarios
4. **Results**: Review your performance and get improvement suggestions

### Test Structure
- Each test contains multiple realistic scenarios
- Questions are based on actual MOS exam objectives
- Time limits simulate real exam conditions
- Immediate feedback and detailed explanations

## Technology Stack 🛠️

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite (fast, modern build tool)
- **Routing**: React Router DOM
- **Styling**: Pure CSS with modern features
- **State Management**: React Context API with useReducer
- **Icons**: Lucide React
- **Development**: Hot Module Replacement (HMR) with Vite

## Project Structure 📁

```
src/
├── components/          # Reusable UI components
│   └── Header.tsx
├── pages/              # Main application pages
│   ├── Home.tsx
│   ├── TestSelection.tsx
│   ├── Practice.tsx
│   └── Results.tsx
├── context/            # React context for state management
│   └── TestContext.tsx
├── data/               # Test questions and mock data
│   └── questions.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── index.css          # Global styles
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap 🗺️

- [ ] Add more question types and scenarios
- [ ] Implement user authentication and progress saving
- [ ] Add offline mode support
- [ ] Create mobile app version
- [ ] Integrate with official MOS study materials
- [ ] Add video explanations for complex topics
- [ ] Implement adaptive testing based on performance

## MOS Certification Information ℹ️

The Microsoft Office Specialist (MOS) certification is a globally recognized standard for Office productivity skills. This practice sandbox helps you prepare for:

- **MOS Word** (Core and Expert levels)
- **MOS Excel** (Core and Expert levels)  
- **MOS PowerPoint**
- **MOS Outlook**

### Exam Tips
- Passing score is typically 700/1000 (70%)
- Exams are performance-based (hands-on tasks)
- Time limits vary by application (45-60 minutes)
- Practice in the actual Office applications alongside this tool

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Microsoft Office documentation and training materials
- MOS certification community for feedback and testing
- Open source React and TypeScript communities

## Support 💬

If you have questions or need support:
- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Note**: This is a practice tool and not affiliated with Microsoft. For official MOS certification information, visit [Microsoft's certification website](https://docs.microsoft.com/en-us/learn/certifications/).
