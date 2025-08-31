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
  },
  {
    id: 'word-6',
    type: 'word',
    title: 'Mục lục và Tài liệu tham khảo',
    description: 'Tạo mục lục tự động và quản lý tài liệu tham khảo.',
    instruction: 'Chèn mục lục tự động ở đầu tài liệu sử dụng kiểu tiêu đề có sẵn. Thêm ngắt trang trước mỗi phần chính. Chèn chú thích cuối trang cho ít nhất 3 trích dẫn và tạo phần thư mục với định dạng phù hợp.',
    difficulty: 'intermediate',
    timeLimit: 400,
    points: 20,
    options: [
      'Mục lục hoàn chỉnh với định dạng phù hợp, chú thích và thư mục',
      'Mục lục được tạo nhưng thiếu định dạng hoặc tham khảo',
      'Mục lục cơ bản nhưng chú thích hoặc thư mục không hoàn chỉnh',
      'Thử mục lục nhưng hầu hết không hoàn chỉnh'
    ]
  },
  {
    id: 'word-7',
    type: 'word',
    title: 'Đồ họa SmartArt và Biểu đồ',
    description: 'Chèn và tùy chỉnh đồ họa SmartArt để trực quan hóa thông tin.',
    instruction: 'Chèn đồ họa SmartArt "Quy trình" hiển thị quy trình làm việc 4 bước. Tùy chỉnh màu sắc để phù hợp với chủ đề tài liệu, thay đổi kích thước phù hợp và thêm văn bản mô tả cho mỗi bước. Bên dưới, chèn biểu đồ cột đơn giản với dữ liệu mẫu.',
    difficulty: 'beginner',
    timeLimit: 300,
    points: 16,
    options: [
      'SmartArt và biểu đồ được chèn với tùy chỉnh và định dạng phù hợp',
      'Đồ họa được chèn nhưng tùy chỉnh hạn chế hoặc vấn đề định dạng',
      'Đồ họa cơ bản được thêm nhưng tích hợp kém với tài liệu',
      'Thử đồ họa nhưng thành công tối thiểu'
    ]
  },
  {
    id: 'word-8',
    type: 'word',
    title: 'Tạo Biểu mẫu với Content Controls',
    description: 'Thiết kế biểu mẫu tương tác sử dụng Word content controls.',
    instruction: 'Tạo biểu mẫu phản hồi với các điều khiển sau: nhập văn bản cho tên, dropdown cho lựa chọn phòng ban (HR, IT, Marketing, Sales), chọn ngày cho ngày phản hồi, và tùy chọn checkbox cho đánh giá (Xuất sắc, Tốt, Trung bình, Kém). Bảo vệ biểu mẫu.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 28,
    options: [
      'Biểu mẫu chức năng hoàn chỉnh với tất cả điều khiển và bảo vệ phù hợp',
      'Biểu mẫu được tạo với hầu hết điều khiển nhưng thiếu một số chức năng',
      'Biểu mẫu cơ bản nhưng điều khiển hoặc bảo vệ không hoàn chỉnh',
      'Thử tạo biểu mẫu nhưng hầu hết không hoạt động'
    ]
  },
  {
    id: 'word-9',
    type: 'word',
    title: 'Ngắt Phần và Bố cục Cột',
    description: 'Sử dụng ngắt phần để tạo bố cục trang khác nhau trong cùng một tài liệu.',
    instruction: 'Tạo bố cục bản tin: Trang tiêu đề (cột đơn), phần bài viết (2 cột), và phụ lục (3 cột). Sử dụng ngắt phần liên tục giữa các phần. Áp dụng đầu trang khác nhau cho mỗi phần và đảm bảo luồng văn bản phù hợp.',
    difficulty: 'intermediate',
    timeLimit: 450,
    points: 24,
    options: [
      'Bố cục phần hoàn hảo với ngắt phù hợp và định dạng cột',
      'Bố cục phần tốt nhưng vấn đề định dạng nhỏ',
      'Phần cơ bản được tạo nhưng định dạng không nhất quán',
      'Thử phần nhưng thực hiện bố cục kém'
    ]
  },
  {
    id: 'word-10',
    type: 'word',
    title: 'Thao tác Tìm và Thay thế Nâng cao',
    description: 'Sử dụng tính năng tìm và thay thế nâng cao để chỉnh sửa tài liệu.',
    instruction: 'Sử dụng Tìm & Thay thế để: 1) Thay thế tất cả "công ty" bằng "tổ chức" (phân biệt chữ hoa/thường), 2) Tìm tất cả địa chỉ email và định dạng màu xanh, 3) Sử dụng ký tự đại diện để tìm tất cả năm 4 chữ số và làm đậm, 4) Thay thế khoảng trắng kép bằng khoảng trắng đơn trong toàn tài liệu.',
    difficulty: 'advanced',
    timeLimit: 360,
    points: 22,
    options: [
      'Tất cả thao tác tìm và thay thế được hoàn thành chính xác',
      'Hầu hết thao tác hoàn thành nhưng có lỗi nhỏ hoặc thiếu sót',
      'Một số thao tác hoàn thành nhưng có lỗi đáng kể',
      'Thử thao tác nhưng hầu hết không thành công'
    ]
  }
];

export const excelQuestionsEn: TestQuestion[] = [
  {
    id: 'excel-1',
    type: 'excel',
    title: 'VLOOKUP with Error Handling',
    description: 'Create a VLOOKUP formula with proper error handling for missing data.',
    instruction: 'In cell E2, create a VLOOKUP formula to find product prices from table A2:B10. Use IFERROR to display "Not Found" for missing items. The lookup value is in D2, return the price from column 2, use exact match.',
    difficulty: 'intermediate',
    timeLimit: 240,
    points: 18,
    options: [
      '=IFERROR(VLOOKUP(D2,A$2:B$10,2,FALSE),"Not Found") with correct syntax',
      'VLOOKUP formula works but missing error handling',
      'Formula attempts VLOOKUP but has syntax errors',
      'Incorrect formula or approach used'
    ]
  },
  {
    id: 'excel-2',
    type: 'excel',
    title: 'Conditional Formatting with Multiple Rules',
    description: 'Apply conditional formatting with multiple rules to highlight data patterns.',
    instruction: 'In range B2:E20, create conditional formatting rules: 1) Values >100 in green, 2) Values between 50-100 in yellow, 3) Values <50 in red, 4) Duplicate values with blue border.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 20,
    options: [
      'All four conditional formatting rules applied correctly with proper colors and ranges',
      'Most rules applied but missing one condition or incorrect range',
      'Basic conditional formatting but incomplete rules or wrong colors',
      'Minimal formatting applied or mostly incorrect'
    ]
  },
  {
    id: 'excel-3',
    type: 'excel',
    title: 'PivotTable with Calculated Field',
    description: 'Create a PivotTable with calculated fields and custom grouping.',
    instruction: 'Create a PivotTable from data in A1:F50. Add Region to Rows, Product to Columns, Sum of Sales to Values. Create calculated field "Profit Margin" = (Sales-Cost)/Sales*100. Group dates by quarters.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 28,
    options: [
      'Complete PivotTable with calculated field, proper grouping, and correct layout',
      'PivotTable created with calculated field but missing date grouping',
      'Basic PivotTable structure but calculated field has errors',
      'PivotTable attempt but major errors or missing components'
    ]
  },
  {
    id: 'excel-4',
    type: 'excel',
    title: 'INDEX-MATCH Advanced Lookup',
    description: 'Use INDEX-MATCH for flexible two-way lookups.',
    instruction: 'In cell F2, create an INDEX-MATCH formula to lookup values from table A1:D20. Lookup value in E2 should find the matching row, then return value from column specified in E1 (column number).',
    difficulty: 'advanced',
    timeLimit: 360,
    points: 25,
    options: [
      '=INDEX(A$1:D$20,MATCH(E2,A$1:A$20,0),E$1) with proper absolute references',
      'INDEX-MATCH formula works but has referencing issues',
      'Formula attempts INDEX-MATCH but syntax errors present',
      'Incorrect approach or non-functional formula'
    ]
  },
  {
    id: 'excel-5',
    type: 'excel',
    title: 'Data Validation with Custom Lists',
    description: 'Implement data validation with dependent dropdown lists.',
    instruction: 'Create dropdown in B2:B10 with options: Electronics, Clothing, Books. In C2:C10, create dependent dropdown that shows subcategories based on B column selection (Electronics: Phone,Laptop,Tablet; Clothing: Shirt,Pants,Shoes; Books: Fiction,Non-fiction,Science).',
    difficulty: 'advanced',
    timeLimit: 420,
    points: 26,
    options: [
      'Both dropdowns work correctly with dependent relationships and all subcategories',
      'Primary dropdown works, dependent dropdown partially functional',
      'Basic dropdown validation but dependency not working properly',
      'Data validation attempted but mostly non-functional'
    ]
  },
  {
    id: 'excel-6',
    type: 'excel',
    title: 'Dynamic Chart with Data Tables',
    description: 'Create a dynamic chart that updates with changing data using named ranges.',
    instruction: 'Create a column chart using dynamic named ranges. Data in A1:C12 should automatically update chart when new data is added. Add data table below chart, format with borders and alternating row colors.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 22,
    options: [
      'Dynamic chart updates automatically with new data, properly formatted data table',
      'Chart created but not fully dynamic, data table present with good formatting',
      'Basic chart with some dynamic elements, data table has formatting issues',
      'Static chart or major issues with data table formatting'
    ]
  },
  {
    id: 'excel-7',
    type: 'excel',
    title: 'Goal Seek and Scenario Analysis',
    description: 'Use Goal Seek to find target values and create scenario analysis.',
    instruction: 'In a loan calculator model, use Goal Seek to find the loan amount needed for monthly payment of $500. Create scenarios showing payments for 5%, 6%, and 7% interest rates. Display results in summary table.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'Goal Seek correctly finds target loan amount, scenario analysis complete with summary',
      'Goal Seek works but scenario analysis incomplete or formatting issues',
      'Basic Goal Seek attempt but scenarios not properly implemented',
      'Goal Seek or scenario tools not used correctly'
    ]
  },
  {
    id: 'excel-8',
    type: 'excel',
    title: 'Array Formulas and SUMPRODUCT',
    description: 'Create array formulas using SUMPRODUCT for complex calculations.',
    instruction: 'Use SUMPRODUCT to calculate: 1) Total sales for Region="East" AND Product="Laptop", 2) Average price for items with quantity >10, 3) Count of unique customers in the dataset.',
    difficulty: 'advanced',
    timeLimit: 420,
    points: 28,
    options: [
      'All three SUMPRODUCT formulas work correctly with proper syntax and logic',
      'Two formulas correct, one has minor errors or missing conditions',
      'One formula correct, others have significant errors or wrong approach',
      'SUMPRODUCT not used correctly or formulas non-functional'
    ]
  },
  {
    id: 'excel-9',
    type: 'excel',
    title: 'Macro Recording and Basic VBA',
    description: 'Record a macro to automate repetitive formatting tasks.',
    instruction: 'Record a macro that: 1) Formats selected range with borders and bold headers, 2) Applies currency format to columns C:E, 3) Auto-fits column widths, 4) Assigns macro to a button.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 24,
    options: [
      'Macro recorded successfully, performs all formatting tasks, button works correctly',
      'Macro performs most tasks but missing one formatting element or button issues',
      'Basic macro recorded but incomplete formatting or execution problems',
      'Macro recording unsuccessful or major functionality missing'
    ]
  },
  {
    id: 'excel-10',
    type: 'excel',
    title: 'Power Query Data Import',
    description: 'Use Power Query to import and transform data from external source.',
    instruction: 'Import data from CSV file using Power Query. Clean data by: 1) Removing duplicate rows, 2) Split "Full Name" column into "First Name" and "Last Name", 3) Convert "Date" column to proper date format, 4) Filter out blank entries.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 32,
    options: [
      'Power Query successfully imports, transforms, and cleans data with all requirements met',
      'Data imported and most transformations applied but missing one or two steps',
      'Basic import successful but data cleaning incomplete or has errors',
      'Power Query not used properly or major import/transformation failures'
    ]
  },
  {
    id: 'excel-11',
    type: 'excel',
    title: 'Financial Functions - PMT and NPV',
    description: 'Create financial calculations using PMT, NPV, and IRR functions.',
    instruction: 'Build loan analysis: 1) Calculate monthly payment using PMT for $50000 loan at 6% for 5 years, 2) Calculate NPV of investment with cash flows in B2:B7, discount rate 8%, 3) Find IRR for same cash flows.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 25,
    options: [
      'All financial functions (PMT, NPV, IRR) calculated correctly with proper syntax',
      'Two functions correct, one has minor calculation or syntax errors',
      'One function correct, others have significant errors or wrong parameters',
      'Financial functions not used correctly or results are incorrect'
    ]
  },
  {
    id: 'excel-12',
    type: 'excel',
    title: 'What-If Analysis Data Table',
    description: 'Create one-variable and two-variable data tables for sensitivity analysis.',
    instruction: 'Create data tables to analyze loan payments: 1) One-variable table showing payment changes for interest rates 4%-8%, 2) Two-variable table showing payments for different loan amounts ($40k-$60k) and terms (3-7 years).',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'Both data tables created correctly, show proper sensitivity analysis with all variables',
      'One data table perfect, second has minor setup or calculation issues',
      'Basic data table structure but missing variables or incorrect calculations',
      'Data tables not created properly or major calculation errors'
    ]
  },
  {
    id: 'excel-13',
    type: 'excel',
    title: 'Advanced Filtering and Sorting',
    description: 'Use advanced filtering techniques with multiple criteria.',
    instruction: 'Apply advanced filter to data range A1:F100: 1) Show records where Region="West" OR "East", 2) Sales >$5000, 3) Date between 1/1/2024 and 6/30/2024, 4) Copy results to starting cell H1.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 22,
    options: [
      'Advanced filter applied correctly with all criteria, results copied to specified location',
      'Filter works with most criteria but missing one condition or copy location issue',
      'Basic filtering applied but criteria setup incorrect or incomplete',
      'Advanced filter not used properly or results show wrong data'
    ]
  },
  {
    id: 'excel-14',
    type: 'excel',
    title: 'Sparklines and Mini Charts',
    description: 'Create sparklines to show data trends in cells.',
    instruction: 'In column F, create sparklines for sales data in B2:E20 (each row gets its own sparkline). Use column type, customize with high/low points marked, set uniform scale, add custom colors.',
    difficulty: 'beginner',
    timeLimit: 240,
    points: 18,
    options: [
      'Sparklines created correctly for each row, customized with markers and uniform scale',
      'Sparklines present but missing some customization like markers or scaling',
      'Basic sparklines created but minimal customization applied',
      'Sparklines not created properly or major display issues'
    ]
  },
  {
    id: 'excel-15',
    type: 'excel',
    title: 'Worksheet Protection and Security',
    description: 'Implement worksheet protection with selective cell access.',
    instruction: 'Protect worksheet allowing users to: 1) Edit only cells C2:E20, 2) Use dropdown lists in column B, 3) Sort data in range A1:F20, 4) Set password "MOS2024", 5) Allow inserting rows.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 24,
    options: [
      'Worksheet protection set correctly with all specified permissions and password',
      'Protection applied but missing one or two permission settings',
      'Basic protection but several permission settings incorrect or missing password',
      'Protection not applied correctly or users cannot access allowed areas'
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
    title: 'Master Slide Layout with Corporate Branding',
    description: 'Design a custom slide master with consistent corporate branding elements.',
    instruction: 'Create a slide master with: 1) Company logo in top-left corner, 2) Date/time placeholder in top-right, 3) Custom color scheme using blue (#0078D4) and gray (#666666), 4) Calibri font for titles, Arial for content, 5) Footer with slide numbers.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 24,
    options: [
      'Complete slide master with all branding elements, colors, and fonts correctly applied',
      'Most branding elements present but missing one or two specifications',
      'Basic slide master but inconsistent branding or incorrect fonts/colors',
      'Slide master created but major branding elements missing or incorrect'
    ]
  },
  {
    id: 'ppt-2',
    type: 'powerpoint',
    title: 'Advanced Animation Sequence',
    description: 'Create complex animation sequences with precise timing and triggers.',
    instruction: 'On slide 2: 1) Title flies in from left (0.5s duration), 2) Bullet points appear one by one with 0.25s intervals, 3) Image zooms in with bounce effect, 4) Chart bars grow individually with 0.1s delays, 5) Add click triggers for each animation group.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'All animations perfectly sequenced with correct timing, effects, and triggers',
      'Most animations correct but minor timing issues or missing one trigger',
      'Basic animations present but sequencing or timing problems',
      'Animations attempted but poor execution or major timing issues'
    ]
  },
  {
    id: 'ppt-3',
    type: 'powerpoint',
    title: 'Interactive Presentation with Hyperlinks',
    description: 'Build an interactive presentation with navigation and hyperlinks.',
    instruction: 'Create: 1) Main menu slide with buttons linking to 4 sections, 2) "Back to Menu" buttons on each section slide, 3) Hyperlink to external website in footer, 4) Action buttons for Previous/Next navigation, 5) Mouse-over effects on all buttons.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 32,
    options: [
      'Fully interactive presentation with all hyperlinks, action buttons, and hover effects working',
      'Most interactive elements work but missing one or two hyperlinks/effects',
      'Basic interactivity but some navigation issues or missing hover effects',
      'Attempted interactivity but major navigation problems or broken links'
    ]
  },
  {
    id: 'ppt-4',
    type: 'powerpoint',
    title: 'Data Visualization Dashboard',
    description: 'Create a data-rich slide with multiple chart types and callouts.',
    instruction: 'Insert: 1) Clustered column chart showing quarterly sales, 2) Pie chart for market share breakdown, 3) Line chart for trend analysis, 4) Add data labels and custom colors, 5) Insert callout boxes highlighting key insights, 6) Format with consistent styling.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 26,
    options: [
      'All charts created with proper data, formatting, callouts, and consistent styling',
      'Charts present with good formatting but missing some callouts or styling inconsistencies',
      'Basic charts created but limited formatting or poor callout placement',
      'Charts attempted but major formatting issues or missing callouts'
    ]
  },
  {
    id: 'ppt-5',
    type: 'powerpoint',
    title: 'Multimedia Integration and Timing',
    description: 'Integrate audio, video, and images with synchronized timing.',
    instruction: 'Add: 1) Background audio (loop for entire presentation), 2) Video clip with custom start/end points, 3) Image slideshow with fade transitions, 4) Narration recording for one slide, 5) Synchronize all multimedia elements with slide timing.',
    difficulty: 'advanced',
    timeLimit: 600,
    points: 35,
    options: [
      'All multimedia elements integrated perfectly with proper timing and synchronization',
      'Most multimedia works but minor timing issues or one element not synchronized',
      'Basic multimedia integration but significant timing problems',
      'Multimedia attempted but major playback or synchronization failures'
    ]
  },
  {
    id: 'ppt-6',
    type: 'powerpoint',
    title: 'SmartArt Process Diagram',
    description: 'Create and customize SmartArt graphics for process visualization.',
    instruction: 'Create: 1) Process SmartArt showing 6-step workflow, 2) Customize colors to match presentation theme, 3) Add descriptive text to each step, 4) Resize and position appropriately, 5) Apply 3D effects and shadows, 6) Animate each step individually.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 22,
    options: [
      'SmartArt fully customized with proper text, colors, effects, and individual animations',
      'Good SmartArt customization but missing some effects or animation issues',
      'Basic SmartArt created but limited customization or poor formatting',
      'SmartArt attempted but minimal customization or major formatting problems'
    ]
  },
  {
    id: 'ppt-7',
    type: 'powerpoint',
    title: 'Slide Transition Effects',
    description: 'Apply sophisticated slide transitions with sound and timing controls.',
    instruction: 'Apply transitions: 1) "Morph" between similar slides, 2) "Push" for section transitions, 3) "Fade" for conclusion slides, 4) Add transition sounds where appropriate, 5) Set automatic timing (8 seconds per slide), 6) Create smooth flow between all slides.',
    difficulty: 'beginner',
    timeLimit: 240,
    points: 18,
    options: [
      'All transitions applied correctly with appropriate sounds and perfect timing',
      'Most transitions correct but minor timing issues or missing some sounds',
      'Basic transitions applied but inconsistent or poor timing choices',
      'Transitions attempted but major timing problems or inappropriate effects'
    ]
  },
  {
    id: 'ppt-8',
    type: 'powerpoint',
    title: 'Custom Layout and Text Formatting',
    description: 'Design custom slide layouts with advanced text formatting.',
    instruction: 'Create: 1) Two-column layout with image and bullet list, 2) Apply custom bullet styles (symbols and numbering), 3) Use text effects (shadows, gradients, outlines), 4) Implement consistent paragraph spacing, 5) Add text boxes with callout formatting.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 24,
    options: [
      'Custom layouts with perfect text formatting, effects, and consistent styling throughout',
      'Good layout and formatting but minor inconsistencies or missing one text effect',
      'Basic custom layout but limited text formatting or spacing issues',
      'Layout attempted but poor text formatting or major inconsistencies'
    ]
  },
  {
    id: 'ppt-9',
    type: 'powerpoint',
    title: 'Presenter View and Notes Setup',
    description: 'Configure presenter tools and add comprehensive speaker notes.',
    instruction: 'Setup: 1) Add detailed speaker notes for each slide (50+ words), 2) Configure Presenter View layout, 3) Add slide thumbnails for quick navigation, 4) Set up timer and rehearsal timing, 5) Create backup slides and hide them, 6) Test presenter view functionality.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 26,
    options: [
      'Complete presenter setup with detailed notes, proper configuration, and all tools working',
      'Good presenter setup but missing some notes or minor configuration issues',
      'Basic presenter tools configured but limited notes or setup problems',
      'Presenter features attempted but major configuration or functionality issues'
    ]
  },
  {
    id: 'ppt-10',
    type: 'powerpoint',
    title: 'Template Creation and Themes',
    description: 'Create a custom presentation template with theme variations.',
    instruction: 'Design: 1) Custom theme with 3 color variants, 2) 5 different slide layouts (title, content, comparison, image, conclusion), 3) Custom font scheme, 4) Background graphics and watermarks, 5) Save as PowerPoint template (.potx), 6) Test template functionality.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 34,
    options: [
      'Complete custom template with all layouts, themes, and variations working perfectly',
      'Good template design but missing one layout or minor theme variation issues',
      'Basic template created but limited layouts or theme customization',
      'Template attempted but major design issues or functionality problems'
    ]
  },
  {
    id: 'ppt-11',
    type: 'powerpoint',
    title: 'Collaboration and Review Features',
    description: 'Use PowerPoint collaboration tools for team review and feedback.',
    instruction: 'Implement: 1) Add comments to specific slides and elements, 2) Track changes and revisions, 3) Share presentation with review permissions, 4) Set up co-authoring access, 5) Compare presentation versions, 6) Accept/reject suggested changes.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 22,
    options: [
      'All collaboration features used correctly with proper commenting and change tracking',
      'Most collaboration tools used but missing some review features or access settings',
      'Basic collaboration setup but limited use of review tools',
      'Collaboration attempted but major issues with sharing or review functionality'
    ]
  },
  {
    id: 'ppt-12',
    type: 'powerpoint',
    title: 'Advanced Chart Customization',
    description: 'Create and heavily customize charts with advanced formatting options.',
    instruction: 'Create: 1) Combination chart (column and line), 2) Custom data labels with leader lines, 3) Gradient fills and custom colors, 4) Secondary axis for different data scales, 5) Interactive chart elements with hyperlinks, 6) Custom chart templates.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'Advanced chart with all customizations, perfect formatting, and interactive elements',
      'Good chart customization but missing some advanced features or minor formatting issues',
      'Basic chart with some customization but limited advanced features',
      'Chart created but minimal customization or major formatting problems'
    ]
  },
  {
    id: 'ppt-13',
    type: 'powerpoint',
    title: 'Infographic Design Elements',
    description: 'Design an infographic-style slide using shapes, icons, and data visualization.',
    instruction: 'Create: 1) Custom shapes for data containers, 2) Icon-based process flow, 3) Statistics with large numbers and descriptive text, 4) Color-coded sections with consistent theme, 5) Visual hierarchy using size and positioning, 6) Professional infographic layout.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 28,
    options: [
      'Professional infographic with excellent visual hierarchy, icons, and data presentation',
      'Good infographic design but minor layout issues or inconsistent theming',
      'Basic infographic elements but poor visual hierarchy or limited customization',
      'Infographic attempted but major design problems or poor data visualization'
    ]
  },
  {
    id: 'ppt-14',
    type: 'powerpoint',
    title: 'Slide Show Setup and Delivery',
    description: 'Configure presentation for optimal delivery and audience interaction.',
    instruction: 'Configure: 1) Slide show settings (loop, manual advance), 2) Kiosk mode for self-running presentation, 3) Hide slides for different audience types, 4) Set up laser pointer and pen tools, 5) Configure multiple monitor support, 6) Create custom show variations.',
    difficulty: 'beginner',
    timeLimit: 240,
    points: 20,
    options: [
      'Complete slide show configuration with all delivery settings optimized',
      'Good show setup but missing some configuration options or minor issues',
      'Basic slide show settings but limited optimization for delivery',
      'Show configuration attempted but major setup problems or missing features'
    ]
  },
  {
    id: 'ppt-15',
    type: 'powerpoint',
    title: 'Export and Sharing Options',
    description: 'Export presentation in multiple formats and configure sharing settings.',
    instruction: 'Export: 1) PDF with notes pages, 2) Video format (MP4) with timing, 3) Handouts (3 slides per page), 4) Individual slides as images, 5) Set up OneDrive sharing with editing permissions, 6) Create presentation package for CD/USB.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 24,
    options: [
      'All export formats completed successfully with proper settings and sharing configured',
      'Most exports successful but minor formatting issues or one sharing problem',
      'Basic exports completed but limited format options or sharing issues',
      'Export attempted but major formatting problems or sharing failures'
    ]
  }
];

export const powerpointQuestionsVi: TestQuestion[] = [
  {
    id: 'ppt-1',
    type: 'powerpoint',
    title: 'Thiết kế Slide Master với Thương hiệu Doanh nghiệp',
    description: 'Thiết kế slide master tùy chỉnh với các yếu tố thương hiệu doanh nghiệp nhất quán.',
    instruction: 'Tạo slide master với: 1) Logo công ty ở góc trên-trái, 2) Placeholder ngày/giờ ở góc trên-phải, 3) Bảng màu tùy chỉnh dùng xanh (#0078D4) và xám (#666666), 4) Font Calibri cho tiêu đề, Arial cho nội dung, 5) Footer với số slide.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 24,
    options: [
      'Hoàn thành slide master với tất cả yếu tố thương hiệu, màu sắc và font chính xác',
      'Có hầu hết yếu tố thương hiệu nhưng thiếu một hoặc hai thông số',
      'Slide master cơ bản nhưng thương hiệu không nhất quán hoặc font/màu sai',
      'Đã tạo slide master nhưng thiếu hoặc sai các yếu tố thương hiệu chính'
    ]
  },
  {
    id: 'ppt-2',
    type: 'powerpoint',
    title: 'Chuỗi Animation Nâng cao',
    description: 'Tạo chuỗi animation phức tạp với thời gian và triggers chính xác.',
    instruction: 'Trên slide 2: 1) Tiêu đề bay vào từ trái (0.5s), 2) Bullet points xuất hiện từng cái với khoảng cách 0.25s, 3) Hình ảnh zoom với hiệu ứng bounce, 4) Thanh biểu đồ tăng trưởng từng cái với delay 0.1s, 5) Thêm click triggers cho mỗi nhóm animation.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'Tất cả animations hoàn hảo với thời gian, hiệu ứng và triggers chính xác',
      'Hầu hết animations đúng nhưng có vấn đề nhỏ về thời gian hoặc thiếu trigger',
      'Animations cơ bản nhưng có vấn đề về trình tự hoặc thời gian',
      'Đã thử animations nhưng thực hiện kém hoặc có vấn đề lớn về thời gian'
    ]
  },
  {
    id: 'ppt-3',
    type: 'powerpoint',
    title: 'Presentation Tương tác với Hyperlinks',
    description: 'Xây dựng presentation tương tác với navigation và hyperlinks.',
    instruction: 'Tạo: 1) Slide menu chính với buttons link đến 4 phần, 2) Buttons "Về Menu" trên mỗi slide phần, 3) Hyperlink đến website bên ngoài ở footer, 4) Action buttons cho navigation Trước/Sau, 5) Hiệu ứng mouse-over trên tất cả buttons.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 32,
    options: [
      'Presentation hoàn toàn tương tác với tất cả hyperlinks, action buttons và hover effects hoạt động',
      'Hầu hết yếu tố tương tác hoạt động nhưng thiếu một vài hyperlinks/effects',
      'Tương tác cơ bản nhưng có vấn đề navigation hoặc thiếu hover effects',
      'Đã thử tương tác nhưng có vấn đề lớn về navigation hoặc links hỏng'
    ]
  },
  {
    id: 'ppt-4',
    type: 'powerpoint',
    title: 'Dashboard Trực quan hóa Dữ liệu',
    description: 'Tạo slide giàu dữ liệu với nhiều loại biểu đồ và callouts.',
    instruction: 'Chèn: 1) Biểu đồ cột clustered hiển thị doanh số theo quý, 2) Biểu đồ tròn cho phần chia thị trường, 3) Biểu đồ đường cho phân tích xu hướng, 4) Thêm nhãn dữ liệu và màu tùy chỉnh, 5) Chèn callout boxes nổi bật insights chính, 6) Format với styling nhất quán.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 26,
    options: [
      'Tất cả biểu đồ tạo với dữ liệu, formatting, callouts và styling nhất quán đúng',
      'Biểu đồ có với formatting tốt nhưng thiếu callouts hoặc styling không nhất quán',
      'Biểu đồ cơ bản được tạo nhưng formatting hạn chế hoặc callouts đặt kém',
      'Đã thử biểu đồ nhưng có vấn đề lớn về formatting hoặc thiếu callouts'
    ]
  },
  {
    id: 'ppt-5',
    type: 'powerpoint',
    title: 'Tích hợp Multimedia và Timing',
    description: 'Tích hợp audio, video, và hình ảnh với thời gian đồng bộ.',
    instruction: 'Thêm: 1) Audio nền (loop cho toàn presentation), 2) Video clip với điểm bắt đầu/kết thúc tùy chỉnh, 3) Slideshow hình ảnh với fade transitions, 4) Recording narration cho một slide, 5) Đồng bộ tất cả multimedia với timing slide.',
    difficulty: 'advanced',
    timeLimit: 600,
    points: 35,
    options: [
      'Tất cả yếu tố multimedia tích hợp hoàn hảo với timing và đồng bộ đúng',
      'Hầu hết multimedia hoạt động nhưng có vấn đề nhỏ về timing hoặc một yếu tố không đồng bộ',
      'Tích hợp multimedia cơ bản nhưng có vấn đề lớn về timing',
      'Đã thử multimedia nhưng playback hoặc đồng bộ thất bại lớn'
    ]
  },
  {
    id: 'ppt-6',
    type: 'powerpoint',
    title: 'Sơ đồ Quy trình SmartArt',
    description: 'Tạo và tùy chỉnh đồ họa SmartArt để trực quan hóa quy trình.',
    instruction: 'Tạo: 1) SmartArt quy trình hiển thị workflow 6 bước, 2) Tùy chỉnh màu sắc phù hợp theme presentation, 3) Thêm text mô tả cho mỗi bước, 4) Resize và định vị phù hợp, 5) Áp dụng hiệu ứng 3D và shadows, 6) Animate từng bước riêng lẻ.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 22,
    options: [
      'SmartArt hoàn toàn tùy chỉnh với text, màu sắc, hiệu ứng và animations riêng lẻ đúng',
      'Tùy chỉnh SmartArt tốt nhưng thiếu hiệu ứng hoặc có vấn đề animation',
      'SmartArt cơ bản được tạo nhưng tùy chỉnh hạn chế hoặc formatting kém',
      'Đã thử SmartArt nhưng tùy chỉnh tối thiểu hoặc có vấn đề lớn về formatting'
    ]
  },
  {
    id: 'ppt-7',
    type: 'powerpoint',
    title: 'Hiệu ứng Chuyển tiếp Slide',
    description: 'Áp dụng chuyển tiếp slide phức tạp với âm thanh và điều khiển timing.',
    instruction: 'Áp dụng chuyển tiếp: 1) "Morph" giữa các slides tương tự, 2) "Push" cho chuyển tiếp phần, 3) "Fade" cho slides kết luận, 4) Thêm âm thanh chuyển tiếp phù hợp, 5) Đặt timing tự động (8 giây mỗi slide), 6) Tạo luồng mượt giữa tất cả slides.',
    difficulty: 'beginner',
    timeLimit: 240,
    points: 18,
    options: [
      'Tất cả chuyển tiếp áp dụng đúng với âm thanh phù hợp và timing hoàn hảo',
      'Hầu hết chuyển tiếp đúng nhưng có vấn đề nhỏ về timing hoặc thiếu âm thanh',
      'Chuyển tiếp cơ bản được áp dụng nhưng không nhất quán hoặc chọn timing kém',
      'Đã thử chuyển tiếp nhưng có vấn đề lớn về timing hoặc hiệu ứng không phù hợp'
    ]
  },
  {
    id: 'ppt-8',
    type: 'powerpoint',
    title: 'Layout Tùy chỉnh và Formatting Text',
    description: 'Thiết kế layouts slide tùy chỉnh với formatting text nâng cao.',
    instruction: 'Tạo: 1) Layout hai cột với hình ảnh và danh sách bullet, 2) Áp dụng styles bullet tùy chỉnh (ký hiệu và đánh số), 3) Dùng hiệu ứng text (shadows, gradients, outlines), 4) Thực hiện khoảng cách đoạn văn nhất quán, 5) Thêm text boxes với formatting callout.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 24,
    options: [
      'Layouts tùy chỉnh với formatting text hoàn hảo, hiệu ứng và styling nhất quán',
      'Layout và formatting tốt nhưng có sự không nhất quán nhỏ hoặc thiếu một hiệu ứng text',
      'Layout tùy chỉnh cơ bản nhưng formatting text hạn chế hoặc có vấn đề khoảng cách',
      'Đã thử layout nhưng formatting text kém hoặc có sự không nhất quán lớn'
    ]
  },
  {
    id: 'ppt-9',
    type: 'powerpoint',
    title: 'Thiết lập Presenter View và Notes',
    description: 'Cấu hình công cụ presenter và thêm ghi chú diễn giả toàn diện.',
    instruction: 'Thiết lập: 1) Thêm ghi chú diễn giả chi tiết cho mỗi slide (50+ từ), 2) Cấu hình layout Presenter View, 3) Thêm thumbnails slide để navigation nhanh, 4) Thiết lập timer và rehearsal timing, 5) Tạo backup slides và ẩn chúng, 6) Test chức năng presenter view.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 26,
    options: [
      'Thiết lập presenter hoàn chỉnh với ghi chú chi tiết, cấu hình đúng và tất cả công cụ hoạt động',
      'Thiết lập presenter tốt nhưng thiếu ghi chú hoặc có vấn đề cấu hình nhỏ',
      'Công cụ presenter cơ bản được cấu hình nhưng ghi chú hạn chế hoặc có vấn đề thiết lập',
      'Đã thử tính năng presenter nhưng có vấn đề lớn về cấu hình hoặc chức năng'
    ]
  },
  {
    id: 'ppt-10',
    type: 'powerpoint',
    title: 'Tạo Template và Themes',
    description: 'Tạo template presentation tùy chỉnh với biến thể theme.',
    instruction: 'Thiết kế: 1) Theme tùy chỉnh với 3 biến thể màu, 2) 5 layouts slide khác nhau (title, content, comparison, image, conclusion), 3) Font scheme tùy chỉnh, 4) Đồ họa nền và watermarks, 5) Lưu dưới dạng PowerPoint template (.potx), 6) Test chức năng template.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 34,
    options: [
      'Template tùy chỉnh hoàn chỉnh với tất cả layouts, themes và biến thể hoạt động hoàn hảo',
      'Thiết kế template tốt nhưng thiếu một layout hoặc có vấn đề nhỏ về biến thể theme',
      'Template cơ bản được tạo nhưng layouts hạn chế hoặc tùy chỉnh theme ít',
      'Đã thử template nhưng có vấn đề lớn về thiết kế hoặc chức năng'
    ]
  },
  {
    id: 'ppt-11',
    type: 'powerpoint',
    title: 'Tính năng Cộng tác và Review',
    description: 'Sử dụng công cụ cộng tác PowerPoint để review và feedback nhóm.',
    instruction: 'Thực hiện: 1) Thêm comments cho slides và elements cụ thể, 2) Track changes và revisions, 3) Share presentation với quyền review, 4) Thiết lập co-authoring access, 5) So sánh versions presentation, 6) Accept/reject các thay đổi đề xuất.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 22,
    options: [
      'Tất cả tính năng cộng tác sử dụng đúng với commenting và change tracking phù hợp',
      'Hầu hết công cụ cộng tác được dùng nhưng thiếu tính năng review hoặc cài đặt access',
      'Thiết lập cộng tác cơ bản nhưng sử dụng công cụ review hạn chế',
      'Đã thử cộng tác nhưng có vấn đề lớn về sharing hoặc chức năng review'
    ]
  },
  {
    id: 'ppt-12',
    type: 'powerpoint',
    title: 'Tùy chỉnh Biểu đồ Nâng cao',
    description: 'Tạo và tùy chỉnh mạnh biểu đồ với tùy chọn formatting nâng cao.',
    instruction: 'Tạo: 1) Biểu đồ kết hợp (cột và đường), 2) Nhãn dữ liệu tùy chỉnh với leader lines, 3) Gradient fills và màu tùy chỉnh, 4) Trục phụ cho scales dữ liệu khác nhau, 5) Elements biểu đồ tương tác với hyperlinks, 6) Templates biểu đồ tùy chỉnh.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'Biểu đồ nâng cao với tất cả tùy chỉnh, formatting hoàn hảo và elements tương tác',
      'Tùy chỉnh biểu đồ tốt nhưng thiếu tính năng nâng cao hoặc có vấn đề formatting nhỏ',
      'Biểu đồ cơ bản với tùy chỉnh ít nhưng tính năng nâng cao hạn chế',
      'Biểu đồ được tạo nhưng tùy chỉnh tối thiểu hoặc có vấn đề lớn về formatting'
    ]
  },
  {
    id: 'ppt-13',
    type: 'powerpoint',
    title: 'Elements Thiết kế Infographic',
    description: 'Thiết kế slide kiểu infographic sử dụng shapes, icons và trực quan hóa dữ liệu.',
    instruction: 'Tạo: 1) Shapes tùy chỉnh cho containers dữ liệu, 2) Luồng quy trình dựa trên icons, 3) Thống kê với số lớn và text mô tả, 4) Phần mã hóa màu với theme nhất quán, 5) Phân cấp thị giác bằng size và positioning, 6) Layout infographic chuyên nghiệp.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 28,
    options: [
      'Infographic chuyên nghiệp với phân cấp thị giác xuất sắc, icons và trình bày dữ liệu',
      'Thiết kế infographic tốt nhưng có vấn đề layout nhỏ hoặc theming không nhất quán',
      'Elements infographic cơ bản nhưng phân cấp thị giác kém hoặc tùy chỉnh hạn chế',
      'Đã thử infographic nhưng có vấn đề lớn về thiết kế hoặc trực quan hóa dữ liệu kém'
    ]
  },
  {
    id: 'ppt-14',
    type: 'powerpoint',
    title: 'Thiết lập và Trình bày Slide Show',
    description: 'Cấu hình presentation để trình bày tối ưu và tương tác với khán giả.',
    instruction: 'Cấu hình: 1) Cài đặt slide show (loop, manual advance), 2) Chế độ Kiosk cho presentation tự chạy, 3) Ẩn slides cho các loại khán giả khác nhau, 4) Thiết lập laser pointer và pen tools, 5) Cấu hình hỗ trợ nhiều monitor, 6) Tạo biến thể show tùy chỉnh.',
    difficulty: 'beginner',
    timeLimit: 240,
    points: 20,
    options: [
      'Cấu hình slide show hoàn chỉnh với tất cả cài đặt trình bày được tối ưu',
      'Thiết lập show tốt nhưng thiếu tùy chọn cấu hình hoặc có vấn đề nhỏ',
      'Cài đặt slide show cơ bản nhưng tối ưu hạn chế cho trình bày',
      'Đã thử cấu hình show nhưng có vấn đề lớn về thiết lập hoặc thiếu tính năng'
    ]
  },
  {
    id: 'ppt-15',
    type: 'powerpoint',
    title: 'Tùy chọn Export và Chia sẻ',
    description: 'Export presentation trong nhiều formats và cấu hình cài đặt chia sẻ.',
    instruction: 'Export: 1) PDF với notes pages, 2) Video format (MP4) với timing, 3) Handouts (3 slides mỗi trang), 4) Slides riêng lẻ dưới dạng hình ảnh, 5) Thiết lập OneDrive sharing với quyền editing, 6) Tạo presentation package cho CD/USB.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 24,
    options: [
      'Tất cả formats export hoàn thành thành công với cài đặt đúng và sharing được cấu hình',
      'Hầu hết exports thành công nhưng có vấn đề formatting nhỏ hoặc một vấn đề sharing',
      'Exports cơ bản hoàn thành nhưng tùy chọn format hạn chế hoặc có vấn đề sharing',
      'Đã thử export nhưng có vấn đề lớn về formatting hoặc sharing thất bại'
    ]
  }
];

export const outlookQuestionsEn: TestQuestion[] = [
  {
    id: 'outlook-1',
    type: 'outlook',
    title: 'Advanced Email Organization System',
    description: 'Set up comprehensive email management with folders, rules, and automation.',
    instruction: 'Create: 1) Folder hierarchy (Projects/Active, Projects/Completed, Clients/VIP, Admin/HR), 2) Rules to auto-sort by sender domain and subject keywords, 3) Color categories (Urgent-Red, Follow-up-Yellow, FYI-Blue), 4) Quick Steps for common responses, 5) Search folders for unread high-priority emails.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 24,
    options: [
      'Complete organization system with all folders, rules, categories, and automation working perfectly',
      'Good organization setup but missing some automation features or search folders',
      'Basic folder and rule setup but incomplete categorization or quick steps',
      'Attempted organization but major functionality missing or not working properly'
    ]
  },
  {
    id: 'outlook-2',
    type: 'outlook',
    title: 'Advanced Calendar and Meeting Management',
    description: 'Implement sophisticated calendar management with scheduling and resources.',
    instruction: 'Setup: 1) Recurring meetings (Daily standup, Weekly team, Monthly review), 2) Meeting room booking with resources, 3) Calendar sharing with delegate permissions, 4) Meeting scheduling assistant with availability conflicts, 5) Calendar overlay for multiple calendars, 6) Automatic meeting responses.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 32,
    options: [
      'Advanced calendar system with all features, sharing, resources, and automation working',
      'Good calendar management but missing some advanced features or resource booking',
      'Basic calendar setup but incomplete recurring patterns, sharing, or conflict resolution',
      'Attempted calendar features but major functionality missing or not working properly'
    ]
  },
  {
    id: 'outlook-3',
    type: 'outlook',
    title: 'Contact Management and Distribution Lists',
    description: 'Build comprehensive contact system with groups and automated distribution.',
    instruction: 'Create: 1) Import 100+ contacts from Excel with custom fields, 2) Contact groups (Sales Team, Management, Vendors, Customers), 3) Distribution lists with membership rules, 4) Custom contact forms with additional fields, 5) Contact sharing permissions, 6) Business card design and exchange.',
    difficulty: 'intermediate',
    timeLimit: 420,
    points: 26,
    options: [
      'Complete contact management with import, groups, distribution lists, and custom forms working',
      'Good contact setup but missing some advanced features or custom fields',
      'Basic contact management but incomplete group setup or distribution rules',
      'Attempted contact features but major organization or functionality issues'
    ]
  },
  {
    id: 'outlook-4',
    type: 'outlook',
    title: 'Professional Email Templates and Signatures',
    description: 'Design business communication templates with branded signatures.',
    instruction: 'Create: 1) Email templates (Meeting request, Project update, Client proposal, Follow-up), 2) HTML signatures with logo, contact info, social links, 3) Conditional signature assignment by account, 4) Stationery with company branding, 5) Quick Parts for common text blocks, 6) AutoText entries.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 22,
    options: [
      'Professional templates and HTML signatures with full branding and automation working',
      'Good templates and signatures but missing some formatting or conditional assignment',
      'Basic templates created but incomplete signature setup or limited branding',
      'Attempted templates but minimal professional appearance or functionality issues'
    ]
  },
  {
    id: 'outlook-5',
    type: 'outlook',
    title: 'Task Management and Project Tracking',
    description: 'Implement comprehensive task system with team collaboration.',
    instruction: 'Setup: 1) Task categories (Personal, Work, Projects, Urgent), 2) Recurring tasks with reminders, 3) Task assignment to team members with due dates, 4) Email-to-task conversion using flags, 5) Custom task views and reports, 6) Calendar integration for time blocking, 7) Task progress tracking.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'Complete task management system with all features, assignment, and integration working',
      'Good task setup but missing some advanced features, integration, or reporting',
      'Basic task management but incomplete automation, assignment, or calendar integration',
      'Attempted task features but major functionality missing or not working properly'
    ]
  },
  {
    id: 'outlook-6',
    type: 'outlook',
    title: 'Email Security and Encryption',
    description: 'Configure advanced security features and message encryption.',
    instruction: 'Setup: 1) Digital signatures for outgoing emails, 2) S/MIME certificate installation and configuration, 3) Email encryption for sensitive messages, 4) Junk email filters with custom rules, 5) Phishing protection settings, 6) Safe senders and blocked senders lists, 7) Information Rights Management (IRM).',
    difficulty: 'advanced',
    timeLimit: 420,
    points: 28,
    options: [
      'Complete security setup with digital signatures, encryption, and all protection features working',
      'Good security configuration but missing some encryption features or certificate issues',
      'Basic security setup but incomplete digital signatures or encryption configuration',
      'Attempted security features but major configuration issues or functionality problems'
    ]
  },
  {
    id: 'outlook-7',
    type: 'outlook',
    title: 'Data File Management and Archiving',
    description: 'Implement data organization with PST files and archiving policies.',
    instruction: 'Setup: 1) Create and configure PST files for archiving, 2) AutoArchive settings with custom intervals, 3) Mailbox cleanup tools and size management, 4) Data file passwords and security, 5) Import/export operations for data migration, 6) Backup procedures for critical emails.',
    difficulty: 'intermediate',
    timeLimit: 360,
    points: 24,
    options: [
      'Complete data management with PST files, archiving, and backup procedures working perfectly',
      'Good data file management but missing some archiving automation or security features',
      'Basic PST file setup but incomplete archiving policies or backup procedures',
      'Attempted data management but major functionality issues or security problems'
    ]
  },
  {
    id: 'outlook-8',
    type: 'outlook',
    title: 'Advanced Search and Filtering',
    description: 'Create sophisticated search queries and custom filtering systems.',
    instruction: 'Create: 1) Advanced search queries using Boolean operators, 2) Search folders for specific criteria (unread from VIP, large attachments), 3) Custom views with multiple sorting and grouping, 4) Conditional formatting rules for email highlighting, 5) Instant Search indexing optimization, 6) Search scope configurations.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 22,
    options: [
      'Advanced search system with complex queries, search folders, and custom views working',
      'Good search setup but missing some advanced queries or search folder configurations',
      'Basic search and filtering but incomplete custom views or conditional formatting',
      'Attempted search features but limited functionality or indexing issues'
    ]
  },
  {
    id: 'outlook-9',
    type: 'outlook',
    title: 'Journal and Note Management',
    description: 'Utilize Outlook Journal and Notes for comprehensive information tracking.',
    instruction: 'Setup: 1) Journal entries for automatic activity tracking, 2) Manual journal entries for important events, 3) Note categories and organization, 4) Note integration with contacts and calendar, 5) Journal timeline views and reporting, 6) Custom journal and note templates.',
    difficulty: 'beginner',
    timeLimit: 240,
    points: 18,
    options: [
      'Complete journal and note system with automatic tracking and organization working',
      'Good journal setup but missing some automatic tracking or note integration',
      'Basic journal and note usage but limited organization or template customization',
      'Attempted journal features but minimal functionality or tracking capabilities'
    ]
  },
  {
    id: 'outlook-10',
    type: 'outlook',
    title: 'Mobile and Remote Access Configuration',
    description: 'Configure Outlook for optimal mobile and remote work scenarios.',
    instruction: 'Setup: 1) ActiveSync configuration for mobile devices, 2) Outlook Web App customization and settings, 3) Cached Exchange Mode optimization, 4) Offline email access and synchronization, 5) VPN and security considerations, 6) Mobile device policies and restrictions.',
    difficulty: 'advanced',
    timeLimit: 420,
    points: 26,
    options: [
      'Complete mobile and remote configuration with all sync and security features working',
      'Good mobile setup but missing some sync optimization or security configurations',
      'Basic mobile access but incomplete offline support or device policy implementation',
      'Attempted mobile configuration but major sync issues or security vulnerabilities'
    ]
  },
  {
    id: 'outlook-11',
    type: 'outlook',
    title: 'Integration with Office Applications',
    description: 'Seamlessly integrate Outlook with other Microsoft Office applications.',
    instruction: 'Setup: 1) Mail merge from Word using Outlook contacts, 2) Meeting scheduling from Excel data, 3) PowerPoint presentation sharing via email, 4) OneNote integration for meeting notes, 5) SharePoint document library email notifications, 6) Teams meeting integration.',
    difficulty: 'intermediate',
    timeLimit: 480,
    points: 28,
    options: [
      'Complete Office integration with all applications working seamlessly together',
      'Good integration but missing some features or application connectivity issues',
      'Basic integration setup but incomplete mail merge or meeting scheduling features',
      'Attempted integration but major functionality problems or application compatibility issues'
    ]
  },
  {
    id: 'outlook-12',
    type: 'outlook',
    title: 'Conversation Threading and Email Management',
    description: 'Master conversation management and advanced email handling techniques.',
    instruction: 'Configure: 1) Conversation view with threading optimization, 2) Clean up conversation duplicates and replies, 3) Ignore conversation feature for mass emails, 4) Reply all manager and restrictions, 5) Email recall and replacement procedures, 6) Delivery and read receipts management.',
    difficulty: 'intermediate',
    timeLimit: 300,
    points: 20,
    options: [
      'Advanced conversation management with all threading and cleanup features working optimally',
      'Good conversation setup but missing some cleanup automation or receipt management',
      'Basic conversation threading but incomplete ignore features or recall procedures',
      'Attempted conversation features but limited threading capabilities or management issues'
    ]
  },
  {
    id: 'outlook-13',
    type: 'outlook',
    title: 'Delegate Access and Shared Mailboxes',
    description: 'Configure delegation and shared mailbox management for team collaboration.',
    instruction: 'Setup: 1) Delegate permissions for calendar, email, and tasks, 2) Shared mailbox access with proper permissions, 3) Send-as and send-on-behalf configurations, 4) Shared calendar management with multiple users, 5) Mailbox folder permissions and inheritance, 6) Delegation hierarchy for executives.',
    difficulty: 'advanced',
    timeLimit: 540,
    points: 34,
    options: [
      'Complete delegation system with shared mailboxes and all permission levels working perfectly',
      'Good delegation setup but missing some permission configurations or shared mailbox features',
      'Basic delegation but incomplete shared access or send-as configurations',
      'Attempted delegation but major permission issues or functionality problems'
    ]
  },
  {
    id: 'outlook-14',
    type: 'outlook',
    title: 'Performance Optimization and Troubleshooting',
    description: 'Optimize Outlook performance and resolve common issues.',
    instruction: 'Implement: 1) OST file optimization and compacting, 2) Add-in management and performance impact analysis, 3) Startup optimization and safe mode troubleshooting, 4) Memory usage monitoring and cleanup, 5) Network connectivity troubleshooting, 6) Profile repair and recreation procedures.',
    difficulty: 'advanced',
    timeLimit: 360,
    points: 24,
    options: [
      'Complete performance optimization with all troubleshooting procedures working effectively',
      'Good optimization but missing some file cleanup or add-in management features',
      'Basic performance improvements but incomplete troubleshooting or monitoring capabilities',
      'Attempted optimization but limited effectiveness or major performance issues remain'
    ]
  },
  {
    id: 'outlook-15',
    type: 'outlook',
    title: 'Compliance and Legal Hold Features',
    description: 'Configure compliance features for legal and regulatory requirements.',
    instruction: 'Setup: 1) Litigation hold for specific mailboxes, 2) Retention policies with different periods, 3) eDiscovery searches and exports, 4) Audit log monitoring and reporting, 5) Data Loss Prevention (DLP) policies, 6) Compliance reporting and documentation.',
    difficulty: 'advanced',
    timeLimit: 480,
    points: 30,
    options: [
      'Complete compliance system with all legal hold and retention features working correctly',
      'Good compliance setup but missing some retention policies or eDiscovery features',
      'Basic compliance configuration but incomplete hold procedures or audit capabilities',
      'Attempted compliance features but major configuration issues or regulatory gaps'
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
