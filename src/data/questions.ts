import { TestQuestion } from '../types';

// English Questions
export const wordQuestionsEn: TestQuestion[] = [
  {
    id: 'word-1',
    type: 'word',
    title: 'Document Formatting and Styles',
    description: 'Apply professional formatting to a business document using built-in styles and formatting options.',
    instruction: 'Apply the "Title" style to the first line of the document, "Heading 1" to section headers, and change the document theme to "Office". Set the line spacing for all body text to 1.15 and justify the text alignment.',
    difficulty: 'beginner',
    timeLimit: 300,
    points: 15,
    options: [
      'Applied all formatting correctly with proper styles and spacing',
      'Applied styles but incorrect line spacing or alignment',
      'Applied theme and some styles but missing formatting elements',
      'Only applied basic formatting without proper styles'
    ]
  },
  {
    id: 'word-2',
    type: 'word',
    title: 'Table Creation and Formatting',
    description: 'Create and format a professional table to display quarterly sales data.',
    instruction: 'Insert a 5x4 table with headers: Quarter, Product A, Product B, Total. Apply the "Grid Table 2 - Accent 1" style, center-align the headers, and add borders. Insert sample data and use a formula to calculate totals in the last column.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 20,
    options: [
      'Created table with correct style, alignment, borders, and working formulas',
      'Created table with style and data but missing formulas or alignment',
      'Created basic table with some formatting but incomplete',
      'Created table but missing most formatting requirements'
    ]
  },
  {
    id: 'word-3',
    type: 'word',
    title: 'Mail Merge for Customer Communications',
    description: 'Set up a mail merge to create personalized letters for multiple customers.',
    instruction: 'Create a mail merge document using an Excel data source. Include merge fields for customer name, address, and account number. Set up the document to generate personalized letters with proper greeting and closing. Preview the merge and complete the merge to new document.',
    difficulty: 'advanced',
    timeLimit: 600,
    points: 25,
    options: [
      'Complete mail merge setup with all fields, preview, and successful merge',
      'Mail merge setup with most fields but missing preview or final merge',
      'Partial mail merge setup with data source connected',
      'Attempted mail merge but incomplete setup'
    ]
  },
  {
    id: 'word-4',
    type: 'word',
    title: 'Headers, Footers, and Page Setup',
    description: 'Configure professional document layout with headers, footers, and page numbering.',
    instruction: 'Add a header with company logo on the left and document title on the right. Insert a footer with page numbers in "Page X of Y" format. Set up different first page header/footer, apply portrait orientation, and set 1-inch margins on all sides.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 18,
    options: [
      'Complete header/footer setup with correct formatting and page setup',
      'Added headers/footers but missing some elements or incorrect formatting',
      'Basic header/footer added but incomplete page setup',
      'Attempted headers/footers but most requirements not met'
    ]
  },
  {
    id: 'word-5',
    type: 'word',
    title: 'Document Collaboration and Review',
    description: 'Use collaboration features to track changes and add comments for document review.',
    instruction: 'Turn on Track Changes, make several edits to the document, add comments to specific paragraphs, accept some changes and reject others. Set up document protection to restrict editing to comments only.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 22,
    options: [
      'Successfully used all collaboration features with proper change tracking',
      'Used track changes and comments but incomplete review process',
      'Basic use of some collaboration features',
      'Attempted collaboration features but minimal implementation'
    ]
  },
  {
    id: 'word-6',
    type: 'word',
    title: 'Table of Contents and References',
    description: 'Create automatic table of contents and manage document references.',
    instruction: 'Insert an automatic table of contents at the beginning of the document using built-in heading styles. Add page breaks before each major section. Insert footnotes for at least 3 citations and create a bibliography section with proper formatting.',
    difficulty: 'intermediate',
    timeLimit: 400,
    points: 20,
    options: [
      'Complete TOC with proper formatting, footnotes, and bibliography',
      'TOC created but missing some formatting or references',
      'Basic TOC but incomplete footnotes or bibliography',
      'Attempted TOC but mostly incomplete'
    ]
  },
  {
    id: 'word-7',
    type: 'word',
    title: 'SmartArt Graphics and Charts',
    description: 'Insert and customize SmartArt graphics to visualize information.',
    instruction: 'Insert a "Process" SmartArt graphic showing a 4-step workflow. Customize colors to match the document theme, resize appropriately, and add descriptive text to each step. Below it, insert a simple column chart with sample data.',
    difficulty: 'beginner',
    timeLimit: 300,
    points: 16,
    options: [
      'SmartArt and chart inserted with proper customization and formatting',
      'Graphics inserted but limited customization or formatting issues',
      'Basic graphics added but poor integration with document',
      'Attempted graphics but minimal success'
    ]
  },
  {
    id: 'word-8',
    type: 'word',
    title: 'Form Creation with Content Controls',
    description: 'Design an interactive form using Word content controls.',
    instruction: 'Create a feedback form with the following controls: text input for name, dropdown for department selection (HR, IT, Marketing, Sales), date picker for feedback date, and checkbox options for rating (Excellent, Good, Fair, Poor). Protect the form.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Complete functional form with all controls and proper protection',
      'Form created with most controls but missing some functionality',
      'Basic form but incomplete controls or protection',
      'Attempted form creation but mostly non-functional'
    ]
  },
  {
    id: 'word-9',
    type: 'word',
    title: 'Section Breaks and Column Layout',
    description: 'Use section breaks to create different page layouts within the same document.',
    instruction: 'Create a newsletter layout: Title page (single column), article section (2 columns), and appendix (3 columns). Use continuous section breaks between sections. Apply different headers for each section and ensure proper text flow.',
    difficulty: 'intermediate',
    timeLimit: 450,
    points: 24,
    options: [
      'Perfect section layout with proper breaks and column formatting',
      'Good section layout but minor formatting issues',
      'Basic sections created but inconsistent formatting',
      'Attempted sections but poor layout execution'
    ]
  },
  {
    id: 'word-10',
    type: 'word',
    title: 'Advanced Find and Replace Operations',
    description: 'Use advanced find and replace features for document editing.',
    instruction: 'Use Find & Replace to: 1) Replace all instances of "company" with "organization" (case-sensitive), 2) Find all email addresses and format them in blue color, 3) Use wildcards to find all 4-digit years and make them bold, 4) Replace double spaces with single spaces throughout the document.',
    difficulty: 'advanced',
    timeLimit: 360,
    points: 22,
    options: [
      'All find and replace operations completed correctly',
      'Most operations completed but minor errors or omissions',
      'Some operations completed but significant errors',
      'Attempted operations but mostly unsuccessful'
    ]
  }
];

// Vietnamese Questions
export const wordQuestionsVi: TestQuestion[] = [
  {
    id: 'word-1',
    type: 'word',
    title: 'Định dạng Tài liệu và Kiểu dáng',
    description: 'Áp dụng định dạng chuyên nghiệp cho tài liệu kinh doanh bằng cách sử dụng các kiểu và tùy chọn định dạng có sẵn.',
    instruction: 'Áp dụng kiểu "Title" cho dòng đầu tiên của tài liệu, "Heading 1" cho tiêu đề phần, và thay đổi chủ đề tài liệu thành "Office". Đặt khoảng cách dòng cho tất cả văn bản nội dung thành 1.15 và căn đều văn bản.',
    difficulty: 'beginner',
    timeLimit: 300,
    points: 15,
    options: [
      'Áp dụng tất cả định dạng chính xác với kiểu và khoảng cách phù hợp',
      'Áp dụng kiểu nhưng khoảng cách dòng hoặc căn chỉnh không chính xác',
      'Áp dụng chủ đề và một số kiểu nhưng thiếu các yếu tố định dạng',
      'Chỉ áp dụng định dạng cơ bản mà không có kiểu phù hợp'
    ]
  },
  {
    id: 'word-2',
    type: 'word',
    title: 'Tạo và Định dạng Bảng',
    description: 'Tạo và định dạng bảng chuyên nghiệp để hiển thị dữ liệu bán hàng theo quý.',
    instruction: 'Chèn bảng 5x4 với tiêu đề: Quý, Sản phẩm A, Sản phẩm B, Tổng cộng. Áp dụng kiểu "Grid Table 2 - Accent 1", căn giữa tiêu đề, và thêm viền. Chèn dữ liệu mẫu và sử dụng công thức để tính tổng ở cột cuối.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 20,
    options: [
      'Tạo bảng với kiểu chính xác, căn chỉnh, viền và công thức hoạt động',
      'Tạo bảng với kiểu và dữ liệu nhưng thiếu công thức hoặc căn chỉnh',
      'Tạo bảng cơ bản với một số định dạng nhưng không hoàn chỉnh',
      'Tạo bảng nhưng thiếu hầu hết yêu cầu định dạng'
    ]
  },
  {
    id: 'word-3',
    type: 'word',
    title: 'Trộn Thư cho Giao tiếp Khách hàng',
    description: 'Thiết lập trộn thư để tạo thư cá nhân hóa cho nhiều khách hàng.',
    instruction: 'Tạo tài liệu trộn thư sử dụng nguồn dữ liệu Excel. Bao gồm các trường trộn cho tên khách hàng, địa chỉ và số tài khoản. Thiết lập tài liệu để tạo thư cá nhân hóa với lời chào và kết thúc phù hợp. Xem trước việc trộn và hoàn thành trộn vào tài liệu mới.',
    difficulty: 'advanced',
    timeLimit: 600,
    points: 25,
    options: [
      'Thiết lập trộn thư hoàn chỉnh với tất cả trường, xem trước và trộn thành công',
      'Thiết lập trộn thư với hầu hết trường nhưng thiếu xem trước hoặc trộn cuối',
      'Thiết lập trộn thư một phần với nguồn dữ liệu được kết nối',
      'Thử trộn thư nhưng thiết lập không hoàn chỉnh'
    ]
  },
  {
    id: 'word-4',
    type: 'word',
    title: 'Đầu trang, Chân trang và Thiết lập Trang',
    description: 'Cấu hình bố cục tài liệu chuyên nghiệp với đầu trang, chân trang và đánh số trang.',
    instruction: 'Thêm đầu trang với logo công ty ở bên trái và tiêu đề tài liệu ở bên phải. Chèn chân trang với số trang theo định dạng "Trang X của Y". Thiết lập đầu trang/chân trang trang đầu khác, áp dụng định hướng dọc và đặt lề 1 inch ở tất cả các phía.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 18,
    options: [
      'Thiết lập đầu trang/chân trang hoàn chỉnh với định dạng chính xác và thiết lập trang',
      'Thêm đầu trang/chân trang nhưng thiếu một số yếu tố hoặc định dạng không chính xác',
      'Thêm đầu trang/chân trang cơ bản nhưng thiết lập trang không hoàn chỉnh',
      'Thử đầu trang/chân trang nhưng hầu hết yêu cầu không được đáp ứng'
    ]
  },
  {
    id: 'word-5',
    type: 'word',
    title: 'Cộng tác Tài liệu và Xem xét',
    description: 'Sử dụng các tính năng cộng tác để theo dõi thay đổi và thêm nhận xét để xem xét tài liệu.',
    instruction: 'Bật Theo dõi Thay đổi, thực hiện một số chỉnh sửa trong tài liệu, thêm nhận xét vào các đoạn văn cụ thể, chấp nhận một số thay đổi và từ chối những thay đổi khác. Thiết lập bảo vệ tài liệu để hạn chế chỉnh sửa chỉ cho nhận xét.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 22,
    options: [
      'Sử dụng thành công tất cả tính năng cộng tác với theo dõi thay đổi phù hợp',
      'Sử dụng theo dõi thay đổi và nhận xét nhưng quy trình xem xét không hoàn chỉnh',
      'Sử dụng cơ bản một số tính năng cộng tác',
      'Thử các tính năng cộng tác nhưng triển khai tối thiểu'
    ]
  }
];

export const excelQuestionsEn: TestQuestion[] = [
  {
    id: 'excel-1',
    type: 'excel',
    title: 'Advanced Formula Creation',
    description: 'Create complex formulas using multiple functions to analyze sales data.',
    instruction: 'In cell E2, create a formula using VLOOKUP to find product prices from a lookup table. In F2, use IF and AND functions to apply a 10% discount if quantity > 50 AND product type = "Premium". In G2, use SUMIFS to calculate total sales for each region.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 20,
    options: [
      'All formulas created correctly with proper syntax and results',
      'Most formulas correct but minor syntax errors or missing conditions',
      'Some formulas working but incomplete or incorrect logic',
      'Attempted formulas but mostly incorrect or non-functional'
    ]
  },
  {
    id: 'excel-2',
    type: 'excel',
    title: 'Interactive Dashboard with Charts',
    description: 'Create a comprehensive dashboard with multiple chart types and interactive elements.',
    instruction: 'Create a column chart showing monthly sales trends, a pie chart for product category breakdown, and a line chart for quarterly growth. Add chart titles, legends, and data labels. Insert slicers to filter data interactively and format charts professionally.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Complete dashboard with all chart types, proper formatting, and working slicers',
      'Most charts created with good formatting but missing some interactive elements',
      'Basic charts created but incomplete formatting or missing slicers',
      'Attempted charts but poor formatting and minimal interactivity'
    ]
  },
  {
    id: 'excel-3',
    type: 'excel',
    title: 'PivotTable Analysis',
    description: 'Create comprehensive PivotTable reports to analyze business data.',
    instruction: 'Create a PivotTable showing sales by region and product category. Add a calculated field for profit margin. Group dates by quarters, apply conditional formatting to highlight top performers, and create a PivotChart. Add slicers for interactive filtering.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 25,
    options: [
      'Complete PivotTable with calculated fields, grouping, formatting, and chart',
      'Good PivotTable setup but missing some advanced features',
      'Basic PivotTable created but incomplete analysis features',
      'Attempted PivotTable but minimal functionality'
    ]
  },
  {
    id: 'excel-4',
    type: 'excel',
    title: 'Data Validation and Protection',
    description: 'Implement data validation rules and worksheet protection for data integrity.',
    instruction: 'Create dropdown lists for product categories using Data Validation. Set up input restrictions for date ranges and numeric values. Add custom error messages and input messages. Protect the worksheet allowing only specific cells to be edited.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 22,
    options: [
      'Complete data validation with dropdowns, restrictions, and protection',
      'Good validation setup but missing some error messages or protection',
      'Basic data validation but incomplete implementation',
      'Attempted validation but minimal functionality'
    ]
  },
  {
    id: 'excel-5',
    type: 'excel',
    title: 'Financial Modeling and Analysis',
    description: 'Create financial models using advanced Excel functions and analysis tools.',
    instruction: 'Build a loan calculator using PMT, IPMT, and PPMT functions. Create a depreciation schedule using different methods (SLN, DB, DDB). Add sensitivity analysis using Data Tables and Goal Seek to determine optimal loan terms.',
    difficulty: 'advanced',
    timeLimit: 600,
    points: 30,
    options: [
      'Complete financial model with all functions and analysis tools working correctly',
      'Good financial model but missing some advanced analysis features',
      'Basic financial calculations but incomplete modeling',
      'Attempted financial model but mostly incorrect or non-functional'
    ]
  }
];

export const excelQuestionsVi: TestQuestion[] = [
  {
    id: 'excel-1',
    type: 'excel',
    title: 'Tạo Công thức Nâng cao',
    description: 'Tạo các công thức phức tạp sử dụng nhiều hàm để phân tích dữ liệu bán hàng.',
    instruction: 'Trong ô E2, tạo công thức sử dụng VLOOKUP để tìm giá sản phẩm từ bảng tra cứu. Trong F2, sử dụng hàm IF và AND để áp dụng giảm giá 10% nếu số lượng > 50 VÀ loại sản phẩm = "Premium". Trong G2, sử dụng SUMIFS để tính tổng doanh thu cho mỗi vùng.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 20,
    options: [
      'Tất cả công thức được tạo chính xác với cú pháp và kết quả đúng',
      'Hầu hết công thức đúng nhưng có lỗi cú pháp nhỏ hoặc thiếu điều kiện',
      'Một số công thức hoạt động nhưng logic không hoàn chỉnh hoặc không chính xác',
      'Thử tạo công thức nhưng hầu hết không chính xác hoặc không hoạt động'
    ]
  },
  {
    id: 'excel-2',
    type: 'excel',
    title: 'Bảng điều khiển Tương tác với Biểu đồ',
    description: 'Tạo bảng điều khiển toàn diện với nhiều loại biểu đồ và yếu tố tương tác.',
    instruction: 'Tạo biểu đồ cột hiển thị xu hướng bán hàng hàng tháng, biểu đồ tròn cho phân tích danh mục sản phẩm, và biểu đồ đường cho tăng trưởng theo quý. Thêm tiêu đề biểu đồ, chú giải và nhãn dữ liệu. Chèn slicer để lọc dữ liệu tương tác và định dạng biểu đồ chuyên nghiệp.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Bảng điều khiển hoàn chỉnh với tất cả loại biểu đồ, định dạng phù hợp và slicer hoạt động',
      'Hầu hết biểu đồ được tạo với định dạng tốt nhưng thiếu một số yếu tố tương tác',
      'Biểu đồ cơ bản được tạo nhưng định dạng không hoàn chỉnh hoặc thiếu slicer',
      'Thử tạo biểu đồ nhưng định dạng kém và tương tác tối thiểu'
    ]
  },
  {
    id: 'excel-3',
    type: 'excel',
    title: 'Phân tích PivotTable',
    description: 'Tạo báo cáo PivotTable toàn diện để phân tích dữ liệu kinh doanh.',
    instruction: 'Tạo PivotTable hiển thị doanh thu theo vùng và danh mục sản phẩm. Thêm trường tính toán cho tỷ suất lợi nhuận. Nhóm ngày theo quý, áp dụng định dạng có điều kiện để làm nổi bật những người hoạt động tốt nhất, và tạo PivotChart. Thêm slicer để lọc tương tác.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 25,
    options: [
      'PivotTable hoàn chỉnh với trường tính toán, nhóm, định dạng và biểu đồ',
      'Thiết lập PivotTable tốt nhưng thiếu một số tính năng nâng cao',
      'PivotTable cơ bản được tạo nhưng tính năng phân tích không hoàn chỉnh',
      'Thử PivotTable nhưng chức năng tối thiểu'
    ]
  },
  {
    id: 'excel-4',
    type: 'excel',
    title: 'Xác thực Dữ liệu và Bảo vệ',
    description: 'Triển khai quy tắc xác thực dữ liệu và bảo vệ worksheet để đảm bảo tính toàn vẹn dữ liệu.',
    instruction: 'Tạo danh sách thả xuống cho danh mục sản phẩm bằng Xác thực Dữ liệu. Thiết lập hạn chế đầu vào cho phạm vi ngày và giá trị số. Thêm thông báo lỗi tùy chỉnh và thông báo đầu vào. Bảo vệ worksheet chỉ cho phép chỉnh sửa các ô cụ thể.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 22,
    options: [
      'Xác thực dữ liệu hoàn chỉnh với danh sách thả xuống, hạn chế và bảo vệ',
      'Thiết lập xác thực tốt nhưng thiếu một số thông báo lỗi hoặc bảo vệ',
      'Xác thực dữ liệu cơ bản nhưng triển khai không hoàn chỉnh',
      'Thử xác thực nhưng chức năng tối thiểu'
    ]
  },
  {
    id: 'excel-5',
    type: 'excel',
    title: 'Mô hình Tài chính và Phân tích',
    description: 'Tạo mô hình tài chính sử dụng các hàm Excel nâng cao và công cụ phân tích.',
    instruction: 'Xây dựng máy tính khoản vay sử dụng hàm PMT, IPMT và PPMT. Tạo lịch khấu hao sử dụng các phương pháp khác nhau (SLN, DB, DDB). Thêm phân tích độ nhạy sử dụng Bảng Dữ liệu và Goal Seek để xác định điều kiện vay tối ưu.',
    difficulty: 'advanced',
    timeLimit: 600,
    points: 30,
    options: [
      'Mô hình tài chính hoàn chỉnh với tất cả hàm và công cụ phân tích hoạt động chính xác',
      'Mô hình tài chính tốt nhưng thiếu một số tính năng phân tích nâng cao',
      'Tính toán tài chính cơ bản nhưng mô hình không hoàn chỉnh',
      'Thử mô hình tài chính nhưng hầu hết không chính xác hoặc không hoạt động'
    ]
  }
];

export const powerpointQuestionsEn: TestQuestion[] = [
  {
    id: 'ppt-1',
    type: 'powerpoint',
    title: 'Professional Presentation Design',
    description: 'Create a cohesive presentation design using themes, layouts, and consistent formatting.',
    instruction: 'Apply the "Facet" design theme and change the color scheme to "Blue Warm". Create a title slide, agenda slide, and 3 content slides using appropriate layouts. Ensure consistent font sizing, bullet styles, and slide transitions throughout.',
    difficulty: 'beginner',
    timeLimit: 360,
    points: 18,
    options: [
      'Applied theme correctly with consistent formatting and appropriate layouts',
      'Good theme application but some inconsistency in formatting',
      'Basic theme applied but poor layout choices or formatting issues',
      'Attempted design changes but minimal consistency or professional appearance'
    ]
  },
  {
    id: 'ppt-2',
    type: 'powerpoint',
    title: 'Advanced Animation and Transitions',
    description: 'Implement sophisticated animations and transitions to enhance presentation flow.',
    instruction: 'Add "Morph" transitions between slides. Create custom animation sequences: title flies in from left, bullets appear one by one with "Fade" effect, and images zoom in with sound effects. Set animation triggers and timing for professional delivery.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 25,
    options: [
      'Complex animation sequences with proper timing and professional triggers',
      'Good animations but missing some timing or trigger elements',
      'Basic animations applied but inconsistent or poorly timed',
      'Attempted animations but minimal functionality or poor execution'
    ]
  },
  {
    id: 'ppt-3',
    type: 'powerpoint',
    title: 'Slide Master Customization',
    description: 'Design custom slide masters and layouts for brand consistency.',
    instruction: 'Access Slide Master view and customize the master slide with company logo, specific fonts (Calibri for headings, Arial for body), and color scheme. Create a custom layout for "Quote" slides with special formatting. Apply watermarks and ensure all slides inherit the master design.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Complete slide master customization with custom layouts and consistent branding',
      'Good master slide setup but missing some custom elements',
      'Basic master slide changes but incomplete customization',
      'Attempted slide master work but minimal customization achieved'
    ]
  },
  {
    id: 'ppt-4',
    type: 'powerpoint',
    title: 'Multimedia Integration',
    description: 'Integrate various multimedia elements including audio, video, and interactive content.',
    instruction: 'Insert and format a video clip with custom playback options and trim timing. Add background audio that plays across multiple slides. Insert interactive hyperlinks to other slides and external websites. Create action buttons for navigation.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 22,
    options: [
      'Successfully integrated all multimedia with proper formatting and functionality',
      'Good multimedia integration but missing some interactive elements',
      'Basic multimedia added but incomplete formatting or functionality',
      'Attempted multimedia integration but minimal success'
    ]
  },
  {
    id: 'ppt-5',
    type: 'powerpoint',
    title: 'Data Visualization and SmartArt',
    description: 'Create compelling data visualizations using charts, SmartArt, and infographics.',
    instruction: 'Insert and format a column chart with custom colors and data labels. Create a SmartArt process diagram showing a 5-step workflow. Design an infographic-style slide using shapes, icons, and text boxes with consistent styling and professional layout.',
    difficulty: 'intermediate',
    timeLimit: 480,
    points: 24,
    options: [
      'Excellent data visualization with professional formatting and design',
      'Good charts and SmartArt but missing some formatting details',
      'Basic data visualization but incomplete or poor design choices',
      'Attempted visualization but minimal professional appearance'
    ]
  }
];

export const powerpointQuestionsVi: TestQuestion[] = [
  {
    id: 'ppt-1',
    type: 'powerpoint',
    title: 'Thiết kế Bài thuyết trình Chuyên nghiệp',
    description: 'Tạo thiết kế bài thuyết trình nhất quán sử dụng chủ đề, bố cục và định dạng thống nhất.',
    instruction: 'Áp dụng chủ đề thiết kế "Facet" và thay đổi bảng màu thành "Blue Warm". Tạo slide tiêu đề, slide chương trình nghị sự và 3 slide nội dung sử dụng bố cục phù hợp. Đảm bảo kích thước phông chữ nhất quán, kiểu đầu dòng và chuyển tiếp slide xuyên suốt.',
    difficulty: 'beginner',
    timeLimit: 360,
    points: 18,
    options: [
      'Áp dụng chủ đề chính xác với định dạng nhất quán và bố cục phù hợp',
      'Ứng dụng chủ đề tốt nhưng có một số không nhất quán trong định dạng',
      'Chủ đề cơ bản được áp dụng nhưng lựa chọn bố cục kém hoặc vấn đề định dạng',
      'Thử thay đổi thiết kế nhưng tính nhất quán tối thiểu hoặc xuất hiện chuyên nghiệp'
    ]
  },
  {
    id: 'ppt-2',
    type: 'powerpoint',
    title: 'Hoạt ảnh và Chuyển tiếp Nâng cao',
    description: 'Triển khai hoạt ảnh và chuyển tiếp tinh vi để tăng cường luồng bài thuyết trình.',
    instruction: 'Thêm chuyển tiếp "Morph" giữa các slide. Tạo chuỗi hoạt ảnh tùy chỉnh: tiêu đề bay vào từ trái, các đầu dòng xuất hiện từng cái một với hiệu ứng "Fade", và hình ảnh phóng to với hiệu ứng âm thanh. Đặt kích hoạt hoạt ảnh và thời gian cho việc trình bày chuyên nghiệp.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 25,
    options: [
      'Chuỗi hoạt ảnh phức tạp với thời gian phù hợp và kích hoạt chuyên nghiệp',
      'Hoạt ảnh tốt nhưng thiếu một số yếu tố thời gian hoặc kích hoạt',
      'Hoạt ảnh cơ bản được áp dụng nhưng không nhất quán hoặc thời gian kém',
      'Thử hoạt ảnh nhưng chức năng tối thiểu hoặc thực hiện kém'
    ]
  },
  {
    id: 'ppt-3',
    type: 'powerpoint',
    title: 'Tùy chỉnh Slide Master',
    description: 'Thiết kế slide master và bố cục tùy chỉnh để đảm bảo tính nhất quán thương hiệu.',
    instruction: 'Truy cập chế độ xem Slide Master và tùy chỉnh slide chính với logo công ty, phông chữ cụ thể (Calibri cho tiêu đề, Arial cho nội dung) và bảng màu. Tạo bố cục tùy chỉnh cho slide "Trích dẫn" với định dạng đặc biệt. Áp dụng hình chìm nước và đảm bảo tất cả slide kế thừa thiết kế chính.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Tùy chỉnh slide master hoàn chỉnh với bố cục tùy chỉnh và thương hiệu nhất quán',
      'Thiết lập slide chính tốt nhưng thiếu một số yếu tố tùy chỉnh',
      'Thay đổi slide chính cơ bản nhưng tùy chỉnh không hoàn chỉnh',
      'Thử làm việc với slide master nhưng đạt được tùy chỉnh tối thiểu'
    ]
  },
  {
    id: 'ppt-4',
    type: 'powerpoint',
    title: 'Tích hợp Đa phương tiện',
    description: 'Tích hợp các yếu tố đa phương tiện khác nhau bao gồm âm thanh, video và nội dung tương tác.',
    instruction: 'Chèn và định dạng clip video với tùy chọn phát lại tùy chỉnh và cắt thời gian. Thêm âm thanh nền phát qua nhiều slide. Chèn liên kết tương tác đến các slide khác và trang web bên ngoài. Tạo nút hành động để điều hướng.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 22,
    options: [
      'Tích hợp thành công tất cả đa phương tiện với định dạng và chức năng phù hợp',
      'Tích hợp đa phương tiện tốt nhưng thiếu một số yếu tố tương tác',
      'Đa phương tiện cơ bản được thêm nhưng định dạng hoặc chức năng không hoàn chỉnh',
      'Thử tích hợp đa phương tiện nhưng thành công tối thiểu'
    ]
  },
  {
    id: 'ppt-5',
    type: 'powerpoint',
    title: 'Trực quan hóa Dữ liệu và SmartArt',
    description: 'Tạo trực quan hóa dữ liệu hấp dẫn sử dụng biểu đồ, SmartArt và infographic.',
    instruction: 'Chèn và định dạng biểu đồ cột với màu sắc tùy chỉnh và nhãn dữ liệu. Tạo sơ đồ quy trình SmartArt hiển thị quy trình làm việc 5 bước. Thiết kế slide kiểu infographic sử dụng hình dạng, biểu tượng và hộp văn bản với kiểu dáng nhất quán và bố cục chuyên nghiệp.',
    difficulty: 'intermediate',
    timeLimit: 480,
    points: 24,
    options: [
      'Trực quan hóa dữ liệu xuất sắc với định dạng chuyên nghiệp và thiết kế',
      'Biểu đồ và SmartArt tốt nhưng thiếu một số chi tiết định dạng',
      'Trực quan hóa dữ liệu cơ bản nhưng lựa chọn thiết kế không hoàn chỉnh hoặc kém',
      'Thử trực quan hóa nhưng xuất hiện chuyên nghiệp tối thiểu'
    ]
  }
];

export const outlookQuestionsEn: TestQuestion[] = [
  {
    id: 'outlook-1',
    type: 'outlook',
    title: 'Advanced Email Organization',
    description: 'Set up comprehensive email organization system with folders, rules, and categories.',
    instruction: 'Create folder structure for Projects, Clients, and Archive. Set up rules to automatically move emails from specific senders to appropriate folders. Create color categories for priority levels and apply them to existing emails. Configure quick steps for common actions.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 20,
    options: [
      'Complete email organization with folders, rules, categories, and quick steps',
      'Good organization setup but missing some automation features',
      'Basic folder and rule setup but incomplete categorization',
      'Attempted organization but minimal functionality achieved'
    ]
  },
  {
    id: 'outlook-2',
    type: 'outlook',
    title: 'Calendar Management and Scheduling',
    description: 'Implement advanced calendar features for efficient time management.',
    instruction: 'Create recurring meetings with different patterns (weekly team meeting, monthly review, quarterly planning). Set up meeting rooms and resources. Create calendar sharing permissions and delegate access. Set up automatic scheduling and conflict resolution.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 25,
    options: [
      'Advanced calendar setup with all features working correctly',
      'Good calendar management but missing some advanced features',
      'Basic calendar setup but incomplete recurring patterns or sharing',
      'Attempted calendar features but minimal functionality'
    ]
  },
  {
    id: 'outlook-3',
    type: 'outlook',
    title: 'Contact Management and Distribution Lists',
    description: 'Create comprehensive contact management system with groups and distribution lists.',
    instruction: 'Import contacts from Excel file, create contact groups for different departments, set up distribution lists with automatic membership rules. Create custom contact forms with additional fields and configure contact sharing permissions.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 22,
    options: [
      'Complete contact management with groups, distribution lists, and custom forms',
      'Good contact setup but missing some advanced features',
      'Basic contact management but incomplete group setup',
      'Attempted contact features but minimal organization achieved'
    ]
  },
  {
    id: 'outlook-4',
    type: 'outlook',
    title: 'Email Templates and Signatures',
    description: 'Design professional email templates and signature blocks for business communication.',
    instruction: 'Create email templates for common business scenarios (meeting requests, project updates, client communications). Design HTML signatures with company logo, contact information, and social media links. Set up automatic signature assignment based on account or folder.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 18,
    options: [
      'Professional templates and signatures with HTML formatting and automation',
      'Good templates and signatures but missing some formatting or automation',
      'Basic templates created but incomplete signature setup',
      'Attempted templates but minimal professional appearance'
    ]
  },
  {
    id: 'outlook-5',
    type: 'outlook',
    title: 'Task and Project Management',
    description: 'Implement comprehensive task management using Outlook tasks, flags, and integration.',
    instruction: 'Create task categories and priorities, set up recurring tasks, assign tasks to team members with due dates and reminders. Use flags to convert emails to tasks, create task reports and views. Integrate with calendar for time blocking.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Complete task management system with all features and integration',
      'Good task setup but missing some advanced features or integration',
      'Basic task management but incomplete automation or reporting',
      'Attempted task features but minimal functionality achieved'
    ]
  }
];

export const outlookQuestionsVi: TestQuestion[] = [
  {
    id: 'outlook-1',
    type: 'outlook',
    title: 'Tổ chức Email Nâng cao',
    description: 'Thiết lập hệ thống tổ chức email toàn diện với thư mục, quy tắc và danh mục.',
    instruction: 'Tạo cấu trúc thư mục cho Dự án, Khách hàng và Lưu trữ. Thiết lập quy tắc để tự động di chuyển email từ người gửi cụ thể đến thư mục phù hợp. Tạo danh mục màu cho mức độ ưu tiên và áp dụng chúng cho email hiện có. Cấu hình các bước nhanh cho các hành động phổ biến.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 20,
    options: [
      'Tổ chức email hoàn chỉnh với thư mục, quy tắc, danh mục và bước nhanh',
      'Thiết lập tổ chức tốt nhưng thiếu một số tính năng tự động hóa',
      'Thiết lập thư mục và quy tắc cơ bản nhưng phân loại không hoàn chỉnh',
      'Thử tổ chức nhưng đạt được chức năng tối thiểu'
    ]
  },
  {
    id: 'outlook-2',
    type: 'outlook',
    title: 'Quản lý Lịch và Lập lịch',
    description: 'Triển khai các tính năng lịch nâng cao để quản lý thời gian hiệu quả.',
    instruction: 'Tạo cuộc họp định kỳ với các mẫu khác nhau (họp nhóm hàng tuần, đánh giá hàng tháng, lập kế hoạch hàng quý). Thiết lập phòng họp và tài nguyên. Tạo quyền chia sẻ lịch và ủy quyền truy cập. Thiết lập lập lịch tự động và giải quyết xung đột.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 25,
    options: [
      'Thiết lập lịch nâng cao với tất cả tính năng hoạt động chính xác',
      'Quản lý lịch tốt nhưng thiếu một số tính năng nâng cao',
      'Thiết lập lịch cơ bản nhưng mẫu định kỳ hoặc chia sẻ không hoàn chỉnh',
      'Thử tính năng lịch nhưng chức năng tối thiểu'
    ]
  },
  {
    id: 'outlook-3',
    type: 'outlook',
    title: 'Quản lý Liên hệ và Danh sách Phân phối',
    description: 'Tạo hệ thống quản lý liên hệ toàn diện với nhóm và danh sách phân phối.',
    instruction: 'Nhập liên hệ từ tệp Excel, tạo nhóm liên hệ cho các phòng ban khác nhau, thiết lập danh sách phân phối với quy tắc thành viên tự động. Tạo biểu mẫu liên hệ tùy chỉnh với các trường bổ sung và cấu hình quyền chia sẻ liên hệ.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 22,
    options: [
      'Quản lý liên hệ hoàn chỉnh với nhóm, danh sách phân phối và biểu mẫu tùy chỉnh',
      'Thiết lập liên hệ tốt nhưng thiếu một số tính năng nâng cao',
      'Quản lý liên hệ cơ bản nhưng thiết lập nhóm không hoàn chỉnh',
      'Thử tính năng liên hệ nhưng đạt được tổ chức tối thiểu'
    ]
  },
  {
    id: 'outlook-4',
    type: 'outlook',
    title: 'Mẫu Email và Chữ ký',
    description: 'Thiết kế mẫu email chuyên nghiệp và khối chữ ký cho giao tiếp kinh doanh.',
    instruction: 'Tạo mẫu email cho các tình huống kinh doanh phổ biến (yêu cầu họp, cập nhật dự án, giao tiếp khách hàng). Thiết kế chữ ký HTML với logo công ty, thông tin liên hệ và liên kết mạng xã hội. Thiết lập chỉ định chữ ký tự động dựa trên tài khoản hoặc thư mục.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 18,
    options: [
      'Mẫu và chữ ký chuyên nghiệp với định dạng HTML và tự động hóa',
      'Mẫu và chữ ký tốt nhưng thiếu một số định dạng hoặc tự động hóa',
      'Mẫu cơ bản được tạo nhưng thiết lập chữ ký không hoàn chỉnh',
      'Thử mẫu nhưng xuất hiện chuyên nghiệp tối thiểu'
    ]
  },
  {
    id: 'outlook-5',
    type: 'outlook',
    title: 'Quản lý Tác vụ và Dự án',
    description: 'Triển khai quản lý tác vụ toàn diện sử dụng tác vụ Outlook, cờ và tích hợp.',
    instruction: 'Tạo danh mục và ưu tiên tác vụ, thiết lập tác vụ định kỳ, gán tác vụ cho thành viên nhóm với ngày hạn và lời nhắc. Sử dụng cờ để chuyển đổi email thành tác vụ, tạo báo cáo và chế độ xem tác vụ. Tích hợp với lịch để chặn thời gian.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Hệ thống quản lý tác vụ hoàn chỉnh với tất cả tính năng và tích hợp',
      'Thiết lập tác vụ tốt nhưng thiếu một số tính năng nâng cao hoặc tích hợp',
      'Quản lý tác vụ cơ bản nhưng tự động hóa hoặc báo cáo không hoàn chỉnh',
      'Thử tính năng tác vụ nhưng đạt được chức năng tối thiểu'
    ]
  }
];

export const getQuestionsForApp = (appType: string, language: string = 'en'): TestQuestion[] => {
  const isVietnamese = language === 'vi';
  
  switch (appType) {
    case 'word':
      return isVietnamese ? wordQuestionsVi : wordQuestionsEn;
    case 'excel':
      return isVietnamese ? excelQuestionsVi : excelQuestionsEn;
    case 'powerpoint':
      return isVietnamese ? powerpointQuestionsVi : powerpointQuestionsEn;
    case 'outlook':
      return isVietnamese ? outlookQuestionsVi : outlookQuestionsEn;
    default:
      return [];
  }
};
