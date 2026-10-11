/**
 * ============================================================================
 * HUSSEIN ABDELRAZEK - PERSONAL BRAND WEBSITE JAVASCRIPT
 * Bilingual Engine (AR/EN), Modal Dialogs, WhatsApp Order Builder & Toast Alerts
 * ============================================================================
 */

(function () {
  'use strict';

  // Configurable Business Details
  const CONFIG = {
    whatsappNumber: '201012345678', // Official WhatsApp number (format without + or dashes)
    instapayHandle: 'husseinabdelrazek@instapay',
    defaultLang: 'ar'
  };

  // --------------------------------------------------------------------------
  // 1. TRANSLATION DICTIONARY (ARABIC & ENGLISH)
  // --------------------------------------------------------------------------
  const translations = {
    ar: {
      meta_title: "حسين عبد الرازق | مستشار مهني ومتخصص في كتابة السير الذاتية للصيادلة",
      meta_description: "مراجعة احترافية للسيرة الذاتية، صياغة مخصصة متوافقة مع أنظمة ATS، وإرشاد مهني لطلاب وخريجي كليات الصيدلة للالتحاق بشركات الأدوية والمستشفيات.",
      og_title: "حسين عبد الرازق | مستشار مهني وتطوير السير الذاتية للصيادلة",
      og_description: "فرصتك المهنية القادمة في قطاع الدواء تبدأ بسيرة ذاتية أقوى وأكثر احترافية. مراجعة وصياغة متوافقة مع ATS.",
      brand_name: "حسين عبد الرازق",
      nav_home: "الرئيسية",
      nav_cv_review: "مراجعة السيرة: 50 ج.م",
      nav_cv_writing: "كتابة السيرة: 200 ج.م",
      nav_services: "الخدمات",
      nav_credibility: "لماذا تختارني؟",
      nav_courses: "البرامج التدريبية",
      nav_resources: "مواد مجانية",
      nav_testimonials: "آراء العملاء",
      nav_about: "عن حسين",
      nav_consultations: "الاستشارات",
      nav_cta: "احجز استشارة",
      
      // Top Announcement Bar
      announcement_pill: "عرض خاص",
      top_bar_review_title: "مراجعة السيرة الذاتية (CV Review):",
      top_bar_writing_title: "كتابة السيرة الذاتية (CV Writing):",
      announcement_btn: "اطلب الآن",
      
      // Hero
      hero_kicker: "المتخصص في السير الذاتية والمسار المهني للصيادلة",
      hero_h1_part1: "فرصتك المهنية القادمة تبدأ",
      hero_h1_part2: "بسيرة ذاتية أقوى.",
      hero_subtext: "مراجعة احترافية للسيرة الذاتية، صياغة مخصصة متوافقة مع أنظمة ATS، وإرشاد مهني عملي لطلاب وخريجي كليات الصيدلة المستعدين للانطلاق بثقة نحو وظائفهم القادمة.",
      hero_primary_cta: "استكشف الخدمات",
      hero_secondary_cta: "احجز استشارة فردية",
      hero_check_1: "متوافق 100% مع أنظمة الفرز (ATS)",
      hero_check_2: "موجه لمسارات شركات الأدوية والمستشفيات",
      hero_check_3: "تسليم سريع ومراجعة دقيقة في 48 ساعة",
      hero_check_4: "دفع ميسر عبر InstaPay وطلب مباشر عبر واتساب",
      badge_status_title: "متاح للاستشارات والطلبات",
      badge_status_sub: "حجز مباشر وتواصل سريع",
      badge_metric_title: "سيرة ذاتية تم تطويرها",
      badge_metric_sub: "بنسبة رضا 98%",

      // Services
      services_badge: "الخدمات الأساسية",
      services_title: "حلول مخصصة لبناء حضورك المهني الصيدلاني",
      services_subtitle: "سواء كنت تمتلك مسودة سيرة ذاتية ترغب في فحصها، أو تحتاج لبناء سيرة جديدة كلياً تؤهلك لكبرى شركات الأدوية والمستشفيات.",
      service_1_tag: "تدقيق وملاحظات تفصيلية",
      service_1_title: "مراجعة وتدقيق السيرة الذاتية (CV Review)",
      service_1_desc: "فحص شامل لسيرتك الذاتية الحالية لتحديد نقاط الضعف، ونسبة التوافق مع أنظمة الفرز (ATS)، وإعادة ضبط صياغتها لتناسب الشركات والمستشفيات المستهدفة.",
      deliverables_title: "ما ستحصل عليه في الخدمة:",
      service_1_deliv_1: "تدقيق أكثر من 25 نقطة جوهرية في الهيكل واللغة والتنسيق",
      service_1_deliv_2: "تقييم نسبة توافق السيرة مع أنظمة ATS واقتراح تصحيحها",
      service_1_deliv_3: "تحديد الكلمات المفتاحية لمسارك المستهدف (Medical Rep, Clinical, etc.)",
      service_1_deliv_4: "تقرير توجيهي مخصص وملاحظات صوتية/مكتوبة قابلة للتطبيق الفوري",
      service_1_deliv_5: "مدة التسليم: 48 ساعة فقط",
      price_label: "تكلفة الخدمة",
      currency_egp: "جنيه مصري",
      service_1_cta: "طلب مراجعة السيرة",
      service_2_tag: "الخيار الأكثر طلباً ⭐",
      service_2_title: "كتابة السيرة الذاتية الاحترافية (CV Writing)",
      service_2_desc: "بناء وصياغة سيرة ذاتية متكاملة من الصفر تعكس قيمتك الأكاديمية والميدانية، بصياغة إنجازية احترافية تجذب مدراء التوظيف وتضمن أعلى درجات التوافق مع ATS.",
      service_2_deliv_1: "جلسة استبيان دقيقة لاستخراج نقاط قوتك وإنجازاتك غير المكتوبة",
      service_2_deliv_2: "صياغة لغوية إنجليزية احترافية بأفعال قوية تناسب شركات الأدوية",
      service_2_deliv_3: "تخصيص كامل للمسار المستهدف (Medical Rep, Hospital, QA/QC, Regulatory)",
      service_2_deliv_4: "تسليم نسختين: ملف Word قابل للتعديل + ملف PDF جاهز للتقديم",
      service_2_deliv_5: "هدية مجانية: نموذج خطاب تقديم (Cover Letter) مخصص + جولة تعديلات",
      service_2_cta: "طلب كتابة سيرة كاملة",

      // Trust
      trust_badge: "المصداقية والأثر",
      trust_title: "خبرة موثوقة بالأرقام والنتائج الحقيقية",
      trust_subtitle: "لا نعتمد على الوعود الزائفة أو الأرقام المفبركة؛ بل نبني عملنا على معايير التوظيف الحقيقية في سوق الدواء المصري والعربي.",
      stat_1_label: "سيرة ذاتية تم فحصها وتطويرها للصيادلة",
      stat_2_label: "طالب وخريج تلقوا توجيهاً مهنياً مخصصاً",
      stat_3_label: "مسارات صيدلانية متخصصة ندعمها",
      stat_4_label: "نسبة رضا وتقييمات إيجابية موثقة",
      pillar_1_title: "التخصص الدوائي الحقيقي",
      pillar_1_desc: "لا نكتب قوالب عامة؛ بل نفهم الفارق الجوهري بين متطلبات الـ Medical Rep ومتطلبات صيدلي المستشفيات أو أخصائي الشؤون التنظيمية.",
      pillar_2_title: "التوافق الصارم مع ATS",
      pillar_2_desc: "نضمن أن سيرتك تخلو من الجداول والأشكال التي تُعطل خوارزميات الفرز، مع تضمين الكلمات المفتاحية التي يبحث عنها مسؤولو الـ HR.",
      pillar_3_title: "الواقعية والصدق المهني",
      pillar_3_desc: "نساعدك على إبراز خبراتك وأنشطتك الحقيقية بأقوى صيغة ممكنة دون ادعاء أو تضخيم غير صادق يضر بفرصتك في المقابلة.",
      pillar_4_title: "الدعم والمتابعة المباشرة",
      pillar_4_desc: "لست مجرد رقم أو ملف يتم تسليمه؛ بل نقدم توجيهات عملية وشرحاً تفصيلياً لكيفية تقديم نفسك بثقة في المقابلات القادمة.",

      // Courses
      courses_badge: "البرامج التدريبية",
      courses_title: "ورش تدريبية وبرامج عملية لتسريع مسارك",
      courses_subtitle: "برامج مكثفة وتطبيقية مصممة لنقل طلاب وخريجي الصيدلة من مرحلة الحيرة الأكاديمية إلى الجاهزية التامة للمنافسة في سوق العمل.",
      course_1_tag_1: "برنامج 4 أسابيع",
      course_1_tag_2: "للطلاب والخريجين الجدد",
      course_1_title: "Pharma Career Launchpad: خارطة الطريق لسوق الدواء",
      course_1_summary: "برنامج متكامل يعلمك كيفية اكتشاف المسار الوظيفي الأنسب لك، وفهم خريطة شركات الأدوية والمستشفيات، وبناء شبكة علاقات مهنية على لينكدإن تجلب الفرص.",
      course_modules_title: "أبرز محاور البرنامج:",
      course_1_mod_1: "تحليل وفهم كافة مسارات الصيدلة (Sales, Clinical, Regulatory, Quality)",
      course_1_mod_2: "استراتيجيات التواصل الذكي والوصول لمدراء التوظيف والـ District Managers",
      course_1_mod_3: "بناء حضور احترافي على لينكدإن وتحويل الحساب إلى مغناطيس فرص",
      course_1_mod_4: "أوراق عمل أسبوعية ومتابعة فردية للتقدم",
      investment_label: "قيمة الاستثمار",
      course_register_cta: "طلب التسجيل في البرنامج",
      course_2_tag_1: "ورشة عمل مكثفة (يومان)",
      course_2_tag_2: "تأهيل Medical Rep",
      course_2_title: "Medical Rep Interview Mastery: أسرار اجتياز مقابلات شركات الأدوية",
      course_2_summary: "تدريب تطبيقي مكثف يركز على الأسئلة السلوكية الشائعة في مقابلات الـ Multinationals، ومحاكاة الـ Role Play وتقنيات الإقناع العلمي والبيعي.",
      course_2_mod_1: "تفكيك أسئلة الكفاءات والسلوك بطريقة STAR المعتمدة عالمياً",
      course_2_mod_2: "محاكاة عملية لمقابلة الـ District Manager والتعامل مع ضغط المقابلة",
      course_2_mod_3: "إتقان سيناريو الـ Detailing والرد على اعتراضات الأطباء الافتراضية",
      course_2_mod_4: "أهم الأخطاء القاتلة التي تستبعد الخريجين الجدد في اللحظة الأخيرة",

      // Resources
      resources_badge: "مواد ومصادر مجانية",
      resources_title: "أدوات عملية مجانية لتطوير ملفك المهني فوراً",
      resources_subtitle: "أدلة وقوائم تدقيق ونماذج جاهزة قمنا بإعدادها لمساعدتك في اتخاذ أولى خطواتك الصحيحة، متاحة للتحميل المباشر.",
      status_available: "متاح للتحميل المجاني",
      status_planned: "قريباً في التحديث القادم",
      resource_1_title: "دليل السيرة الذاتية لطلاب وخريجي الصيدلة (ATS Guide)",
      resource_1_desc: "دليل عملي يشرح معايير نظام ATS، الهيكل السليم للسيرة، وأهم الكلمات المفتاحية لمسارات الدواء والمستشفيات.",
      download_now_btn: "تحميل الدليل (TXT)",
      resource_2_title: "قائمة التدقيق لمقابلات Medical Rep (Checklist)",
      resource_2_desc: "قائمة فحص شاملة للمعلومات العلمية والأسئلة السلوكية وسيناريو الـ Detailing قبل التوجه لمقابلة شركة الأدوية.",
      resource_3_title: "دليل تحسين حساب لينكدإن للصيادلة",
      resource_3_desc: "كتيّب تطبيقي لكتابة الـ Headline والـ About Section واستراتيجيات بناء شبكة علاقات مع مدراء الـ Pharma.",
      coming_soon_btn: "قيد الإعداد",
      resource_4_title: "قاموس مصطلحات ومفاهيم شركات الأدوية",
      resource_4_desc: "أكثر من 80 مصطلحاً شائعاً (KOLs, Detailing, Territory, EDA, CTD, GCP) لا غنى عنها لأي مرشح في المقابلات.",

      // Testimonials
      testimonials_badge: "تجارب وقصص نجاح",
      testimonials_title: "ما يقوله زملاؤنا بعد مراجعة وتطوير سيرهم الذاتية",
      testimonials_subtitle: "آراء حقيقية من صيادلة وحديثي تخرج وثقوا بخدماتنا واستطاعوا لفت انتباه كبرى شركات الأدوية والمستشفيات (مع الحفاظ على سرية البيانات الشخصية).",
      track_medical_rep: "Medical Rep | Multinational",
      testimonial_1_quote: "كنت أقدم على شركات مالتي ناشيونال منذ 4 أشهر بدون أي رد. بعد ما د. حسين أعاد صياغة سيرتي وركّز على أنشطتي الطلابية بأسلوب ATS، تلقيت مكالمة لمقابلة Assessment Center في شركة سويسرية بعد 3 أيام فقط! فارق الصياغة خيالي.",
      author_1_name: "د. أحمد ع.",
      author_1_role: "صيدلي - خريج 2025 | تم التعيين بشركة مالتي ناشيونال",
      track_hospital: "Hospital & Clinical Pharmacy",
      testimonial_2_quote: "خدمة مراجعة السيرة الذاتية مع د. حسين كانت من أفضل الاستثمارات التي قمت بها. التقرير الصوتي المرفق وضّح لي بالضبط لماذا كان يتم استبعاد ملفي في مستشفيات الأورام الكبرى. السيرة أصبحت واضحة، مهنية ومحددة الأهداف.",
      author_2_name: "د. نورهان م.",
      author_2_role: "صيدلانية إكلينيكية | مستشفى أورام كبرى",
      track_consultation: "1-on-1 Consultation",
      testimonial_3_quote: "جلسة الاستشارة الفردية لـ 45 دقيقة وفرت عليّ شهوراً من التخبط. فصّلنا السيرة الذاتية سطراً بسطر وحضرنا أسئلة الإنترفيو الواقعية. شكراً جزيلاً يا دكتور على سعة صدرك وأسلوبك العملي جداً.",
      author_3_name: "د. محمود س.",
      author_3_role: "طالب صيدلة - السنة النهائية | جامعة القاهرة",

      // About
      about_badge: "عن المستشار",
      about_title: "أنا حسين عبد الرازق، وهنا لأساعدك على سد الفجوة بين دراستك وسوق العمل",
      about_float_badge: "رسالتي المهنية",
      about_float_text: "\"سوق الدواء لا يبحث فقط عن الأكثر علماً، بل عن الأقدر على ترجمة كفاءته في حضور مهني واضح ومقنع.\"",
      about_para_1: "كصيدلي خاض تجارب سوق العمل واحتك بمتطلبات التوظيف المعقدة في شركات الأدوية والمستشفيات، رأيت مئات الزملاء والطلاب المتميزين أكاديمياً يُستبعدون من أول مرحلة للتوظيف لمجرد أن سيرهم الذاتية لا تعكس قيمتهم الحقيقية.",
      about_para_2: "الدراسة الصيدلانية تستمر 5 سنوات من الجهد العلمي الشاق، لكن نادراً ما يتعلم الطالب كيف يكتب سيرة ذاتية تفهمها برمجيات الـ ATS، أو كيف يصيغ أنشطته وتدريباته بلغة تفهمها إدارات الموارد البشرية ومدراء المبيعات.",
      about_para_3: "هدفي هو أن أقدم لكل طالب وخريج صيدلة الأدوات العملية والتوجيه المباشر ليقدم نفسه بأعلى درجات الاحترافية والثقة، ويقتنص الفرصة التي يستحقها دون تضييع شهور في محاولات عشوائية.",
      about_val_1: "خلفية صيدلانية متخصصة",
      about_val_2: "خبرة بمتطلبات شركات الـ Multinationals",
      about_val_3: "معايير فنية دقيقة لأنظمة ATS",
      about_val_4: "إرشاد مباشر وتواصل إنساني صادق",
      about_cta: "احجز جلستك الإرشادية معي",

      // Consultations
      consult_badge: "جلسات توجيه فردية",
      consult_title: "استشارة مهنية فردية 1-on-1 لتحديد مسارك",
      consult_subtitle: "جلسة تفاعلية مباشرة عبر Google Meet لمناقشة كافة تساؤلاتك المهنية، تدقيق سيرتك الذاتية، ومحاكاة مقابلتك القادمة.",
      consult_box_title: "ماذا يحدث خلال جلسة الـ 45–60 دقيقة؟",
      consult_box_desc: "جلسة خاصة ومكثفة تركز على وضعك الحالي وتطلعاتك الشخصية، تخرج منها برؤية وخطة واضحة قابلة للتطبيق الفوري.",
      agenda_1_title: "فحص مباشر لسيرتك الذاتية:",
      agenda_1_desc: "نراجع سيرتك سطراً بسطر على الشاشة، ونحدد نقاط القوة ونصلح كل نقطة ضعف قد تستبعدك.",
      agenda_2_title: "مواءمة وتحديد المسار الدوائي:",
      agenda_2_desc: "نناقش شخصيتك ومهاراتك لنحدد هل يناسبك مجال الـ Medical Rep أم الصيدلة الإكلينيكية أم الشؤون التنظيمية.",
      agenda_3_title: "محاكاة لأسئلة المقابلات:",
      agenda_3_desc: "تدريب واقعي على أصعب الأسئلة السلوكية وأسئلة الضغط وكيف تجيب عليها بثقة وهدوء.",
      agenda_4_title: "خطة عمل شهرية مخصصة:",
      agenda_4_desc: "خطوات عملية محددة بالتواريخ لما يجب عليك تنفيذه في الأيام الثلاثين القادمة.",
      consult_duration: "مدة الجلسة: 45–60 دقيقة أونلاين",
      instapay_notice_title: "الدفع وتأكيد الحجز:",
      instapay_notice_desc: "يتم الدفع مسبقاً عبر خدمة InstaPay وإرسال إيصال التحويل عبر واتساب لتأكيد موعد الجلسة في الأجندة يدوياً.",
      consult_book_btn: "احجز موعد الاستشارة الآن",

      // Closing CTA
      closing_title: "مستقبلك المهني في قطاع الدواء يبدأ اليوم",
      closing_desc: "لا تدع سيرتك الذاتية الحالية تضيع عليك فرصاً كان يمكن أن تغير مسارك المهني بالكامل. ابدأ الآن واجعل ملفك يتحدث عن كفاءتك الحقيقية.",
      closing_btn_cv: "اطلب كتابة السيرة عبر واتساب",
      closing_btn_consult: "احجز جلسة استشارية فردية",

      // Footer
      footer_bio: "منصة واستشارات شخصية متخصصة في مساعدة طلاب وخريجي كليات الصيدلة على صياغة سير ذاتية احترافية مطابقة لأنظمة ATS، وبناء حضور مهني قوي في شركات الأدوية والمستشفيات.",
      footer_links_title: "روابط سريعة",
      footer_tracks_title: "المسارات المدعومة",
      footer_contact_title: "التواصل والمساعدة",
      track_rep: "الدعاية الطبية (Medical Rep)",
      track_hosp: "صيدلة المستشفيات والإكلينيكية",
      track_reg: "الشؤون التنظيمية واليقظة الدوائية",
      track_comm: "صيدليات المجتمع والسلاسل",
      track_qa: "توكيد ومراقبة الجودة (QA/QC)",
      footer_copyright: "د. حسين عبد الرازق. جميع الحقوق محفوظة.",
      footer_disclaimer: "* تنويه: جميع عمليات الدفع عبر InstaPay تخضع للمراجعة والتحقق اليدوي عبر إيصال الواتساب قبل بدء تنفيذ الخدمة أو تأكيد موعد الاستشارة.",

      // Modals & Form
      order_modal_title: "طلب خدمة تطوير السيرة الذاتية",
      form_service_label: "الخدمة المختارة",
      form_track_label: "المسار الصيدلاني المستهدف",
      form_name_label: "الاسم الكامل",
      form_phone_label: "رقم الواتساب للتواصل",
      form_phone_help: "سيتم إرسال مسودة السيرة والملاحظات ومتابعة الطلب عبر هذا الرقم.",
      form_grad_label: "الفرقة الدراسية أو سنة التخرج",
      form_notes_label: "ملاحظات إضافية أو روابط (اختياري)",
      form_payment_method_label: "طريقة الدفع وإتمام الطلب",
      instapay_panel_title: "بيانات التحويل عبر InstaPay:",
      instapay_instant_badge: "فوري وبدون رسوم",
      copy_btn: "نسخ الحساب",
      instapay_warning_text: "⚠️ تنبيه هام للتحقق اليدوي: تقديم هذا الطلب لا يسجل المعاملة كمدفوعة تلقائياً. بعد التحويل، سيتم توجيهك إلى واتساب لإرسال لقطة شاشة التحويل لتأكيد البدء الفوري في العمل.",
      submit_order_whatsapp: "تأكيد الطلب والمتابعة عبر واتساب",
      booking_modal_title: "حجز استشارة مهنية فردية (1-on-1)",
      booking_focus_label: "المحور الأساسي للجلسة",
      booking_slot_label: "الموعد والفترة المفضلة",
      consult_fee_header: "رسوم الجلسة: 350 جنيه مصري (45-60 دقيقة)",
      booking_confirm_notice: "ℹ️ لمنع التعارض في المواعيد، يتم تأكيد حجز الموعد نهائياً في الأجندة بعد إرسال رسالة الواتساب المرفقة بإيصال التحويل اليدوي.",
      submit_booking_whatsapp: "إرسال طلب الحجز عبر واتساب"
    },

    en: {
      meta_title: "Hussein Abdelrazek | Career Advisor & CV Specialist for Pharmacists",
      meta_description: "Professional CV review, ATS-compliant CV writing, and practical career guidance for pharmacy students and fresh graduates targeting multinational pharma & hospitals.",
      og_title: "Hussein Abdelrazek | Pharma Career Advisor & CV Specialist",
      og_description: "Your next pharma career opportunity starts with a stronger CV. Professional review and ATS-tailored crafting.",
      brand_name: "Hussein Abdelrazek",
      brand_tag: "Pharma Career Advisor",
      nav_home: "Home",
      nav_cv_review: "CV Review: 50 EGP",
      nav_cv_writing: "CV Writing: 200 EGP",
      nav_services: "Services",
      nav_credibility: "Why Me?",
      nav_courses: "Workshops",
      nav_resources: "Free Resources",
      nav_testimonials: "Testimonials",
      nav_about: "About Hussein",
      nav_consultations: "Consultations",
      nav_cta: "Book Consultation",

      // Top Announcement Bar
      announcement_pill: "Special Offer",
      top_bar_review_title: "CV Review:",
      top_bar_writing_title: "CV Writing:",
      announcement_btn: "Order Now",

      // Hero
      hero_kicker: "Specialized in Pharma CVs & Career Strategy",
      hero_h1_part1: "Your Next Career Opportunity Starts With a",
      hero_h1_part2: "Stronger CV.",
      hero_subtext: "Professional CV review, tailored CV writing, and practical career guidance for pharmacy students and fresh graduates ready to take their next step.",
      hero_primary_cta: "Explore My Services",
      hero_secondary_cta: "Book a Consultation",
      hero_check_1: "100% ATS-Compliant Architecture",
      hero_check_2: "Tailored for Multinational Pharma & Hospitals",
      hero_check_3: "Fast Turnaround & 48-Hour In-Depth Review",
      hero_check_4: "Manual InstaPay & Direct WhatsApp Submission",
      badge_status_title: "Open for Consultations & Orders",
      badge_status_sub: "Direct booking & rapid response",
      badge_metric_title: "CVs Reviewed & Crafted",
      badge_metric_sub: "With 98% positive client feedback",

      // Services
      services_badge: "Core Services",
      services_title: "Tailored Solutions for Your Pharma Career Presence",
      services_subtitle: "Whether you have an existing draft needing an ATS audit, or require a complete professional rebuild from scratch for top multinational pharma & healthcare providers.",
      service_1_tag: "Comprehensive Audit & Feedback",
      service_1_title: "CV Review & Audit",
      service_1_desc: "A meticulous inspection of your current CV to identify red flags, test ATS parsing compatibility, and align your profile with target pharmaceutical recruiters.",
      deliverables_title: "What You Will Receive:",
      service_1_deliv_1: "Rigorous 25+ point audit covering structure, wording, and format",
      service_1_deliv_2: "ATS compatibility score and actionable correction steps",
      service_1_deliv_3: "Keyword optimization for target tracks (Medical Rep, Clinical, etc.)",
      service_1_deliv_4: "Personalized voice/written report with actionable recommendations",
      service_1_deliv_5: "Fast delivery within 48 business hours",
      price_label: "Service Investment",
      currency_egp: "EGP",
      service_1_cta: "Order CV Review",
      service_2_tag: "Most Popular Choice ⭐",
      service_2_title: "Professional CV Writing",
      service_2_desc: "Complete creation of an impactful, ATS-compliant CV from the ground up, highlighting your academic and clinical achievements with strong action-driven verbs.",
      service_2_deliv_1: "In-depth discovery questionnaire to uncover your hidden accomplishments",
      service_2_deliv_2: "Professional English phrasing tailored to pharmaceutical recruiters",
      service_2_deliv_3: "Full customization for your target track (Medical Rep, Clinical, QA/QC, Reg)",
      service_2_deliv_4: "Two files delivered: Editable Word document + Print-ready PDF",
      service_2_deliv_5: "Bonus: Tailored Cover Letter template + Full revision round included",
      service_2_cta: "Order Full CV Writing",

      // Trust
      trust_badge: "Trust & Credibility",
      trust_title: "Proven Expertise Backed by Real Results",
      trust_subtitle: "No exaggerated claims or fabricated statistics. We build our guidance on real recruitment standards in the Egyptian and regional pharmaceutical sectors.",
      stat_1_label: "Pharma CVs reviewed and refined",
      stat_2_label: "Students & grads personally mentored",
      stat_3_label: "Core pharmaceutical tracks supported",
      stat_4_label: "Verified positive satisfaction rate",
      pillar_1_title: "Genuine Pharmaceutical Insight",
      pillar_1_desc: "We don't write generic CVs; we understand the critical difference between Medical Rep requirements and Hospital or Regulatory roles.",
      pillar_2_title: "Strict ATS Compliance",
      pillar_2_desc: "We guarantee clean formatting without broken tables or text boxes that confuse recruiter software, embedding targeted industry keywords.",
      pillar_3_title: "Integrity & Realistic Guidance",
      pillar_3_desc: "We showcase your genuine strengths and activities with confidence, avoiding false inflation that harms your credibility during interviews.",
      pillar_4_title: "Dedicated 1-on-1 Support",
      pillar_4_desc: "You are never just a file; you receive direct feedback, practical interview tips, and personalized explanations.",

      // Courses
      courses_badge: "Educational Programs",
      courses_title: "Practical Workshops to Accelerate Your Career",
      courses_subtitle: "Hands-on, focused programs built to bridge the gap between academic pharmacy studies and competitive job market readiness.",
      course_1_tag_1: "4-Week Structured Cohort",
      course_1_tag_2: "For Students & Fresh Graduates",
      course_1_title: "Pharma Career Launchpad: Market Roadmap",
      course_1_summary: "A structured program teaching you how to evaluate pharma career paths, map multinational employers, and build an active professional network on LinkedIn.",
      course_modules_title: "Key Program Modules:",
      course_1_mod_1: "Deep-dive analysis of all pharmacy career paths (Sales, Clinical, Regulatory, Quality)",
      course_1_mod_2: "Outreach strategies for connecting with District Managers and HR recruiters",
      course_1_mod_3: "Optimizing your LinkedIn profile to attract genuine recruiter inquiries",
      course_1_mod_4: "Weekly practical worksheets and individual progress reviews",
      investment_label: "Course Investment",
      course_register_cta: "Register for Launchpad",
      course_2_tag_1: "2-Day Intensive Workshop",
      course_2_tag_2: "Medical Rep Preparation",
      course_2_title: "Medical Rep Interview Mastery",
      course_2_summary: "Intensive simulation workshop focusing on competency-based interview questions, role-playing product detailing, and objection handling for multinational pharma.",
      course_2_mod_1: "Mastering competency-based questions with the global STAR methodology",
      course_2_mod_2: "Practical simulation of District Manager interviews and pressure handling",
      course_2_mod_3: "Scientific detailing and handling doctor objections with confidence",
      course_2_mod_4: "Analyzing fatal candidate mistakes that cause last-minute rejections",

      // Resources
      resources_badge: "Free Career Resources",
      resources_title: "Actionable Career Tools You Can Use Today",
      resources_subtitle: "Downloadable guides, checklists, and frameworks prepared to help you take your first confident steps in career development.",
      status_available: "Available for Download",
      status_planned: "Coming in Next Update",
      resource_1_title: "Pharma ATS CV Guide for Students & Grads",
      resource_1_desc: "A practical guide explaining ATS standards, standard CV layout, and essential keywords for pharma and hospital tracks.",
      download_now_btn: "Download Guide (TXT)",
      resource_2_title: "Medical Rep Interview Checklist",
      resource_2_desc: "Comprehensive preparation checklist covering scientific review, STAR questions, and product detailing before interviews.",
      resource_3_title: "LinkedIn Profile Guide for Pharmacists",
      resource_3_desc: "Practical playbook for crafting your Headline, About section, and networking with pharmaceutical leadership.",
      coming_soon_btn: "In Preparation",
      resource_4_title: "Pharma Industry Glossary & Key Terms",
      resource_4_desc: "Over 80 common pharmaceutical commercial terms (KOLs, Detailing, Territory, EDA, CTD, GCP) for interviews.",

      // Testimonials
      testimonials_badge: "Client Feedback & Results",
      testimonials_title: "What Pharmacy Colleagues Say After Our Work",
      testimonials_subtitle: "Authentic testimonials from pharmacy students and graduates who trusted our guidance to secure interviews at top multinational pharma firms and hospitals.",
      track_medical_rep: "Medical Rep | Multinational",
      testimonial_1_quote: "I had been applying to multinational pharma companies for 4 months with zero responses. After Dr. Hussein restructured my CV using ATS principles, I received a call for an Assessment Center at a Swiss pharma company in just 3 days! The difference in phrasing was incredible.",
      author_1_name: "Dr. Ahmed A.",
      author_1_role: "Pharmacist - Class of 2025 | Hired at Multinational Pharma",
      track_hospital: "Hospital & Clinical Pharmacy",
      testimonial_2_quote: "The CV Review with Dr. Hussein was one of the best investments I made. The personalized audio feedback explained exactly why my application was screened out by major oncology hospitals. My CV is now sharp, professional, and targeted.",
      author_2_name: "Dr. Nourhan M.",
      author_2_role: "Clinical Pharmacist | Leading Oncology Center",
      track_consultation: "1-on-1 Consultation",
      testimonial_3_quote: "A 45-minute consultation saved me months of trial and error. We dissected my CV line by line and rehearsed tough interview questions. Thank you Dr. Hussein for your patience and practical mentorship.",
      author_3_name: "Dr. Mahmoud S.",
      author_3_role: "Pharmacy Senior Student | Cairo University",

      // About
      about_badge: "About The Advisor",
      about_title: "I'm Hussein Abdelrazek, Here to Bridge the Gap Between Pharmacy School and the Job Market",
      about_float_badge: "My Guiding Philosophy",
      about_float_text: "\"The pharmaceutical market doesn't reward only the most knowledgeable, but those who can clearly translate their competence into a compelling presence.\"",
      about_para_1: "As a pharmacist who navigated the competitive hiring process in multinational pharma and hospital environments, I watched hundreds of brilliant students get screened out simply because their CVs failed to reflect their true caliber.",
      about_para_2: "Pharmacy school provides 5 rigorous years of medical science, but rarely teaches students how to pass an ATS screening or articulate their leadership and internships in recruiter language.",
      about_para_3: "My mission is to equip every ambitious pharmacy student and graduate with the practical tools and direct mentorship needed to stand out with authority and secure the opportunities they deserve.",
      about_val_1: "Specialized Pharmacy Acumen",
      about_val_2: "Multinational Pharma Standards",
      about_val_3: "Technical ATS Architecture",
      about_val_4: "Honest 1-on-1 Mentorship",
      about_cta: "Book a Mentorship Session With Me",

      // Consultations
      consult_badge: "Personal Mentorship",
      consult_title: "1-on-1 Career Consultation to Map Your Path",
      consult_subtitle: "An intensive live session via Google Meet to address your career questions, conduct a live CV audit, and simulate upcoming interviews.",
      consult_box_title: "What Happens in Your 45–60 Minute Session?",
      consult_box_desc: "A private, focused consultation centered on your current standing and ambitions, giving you immediate clarity and an actionable plan.",
      agenda_1_title: "Live Screen-Share CV Audit:",
      agenda_1_desc: "We review your CV line by line, emphasizing high-value experiences and removing disqualifying errors.",
      agenda_2_title: "Pharma Track Alignment:",
      agenda_2_desc: "We evaluate your strengths to pinpoint whether Medical Rep, Clinical Pharmacy, Regulatory Affairs, or QA is your best fit.",
      agenda_3_title: "Realistic Interview Simulation:",
      agenda_3_desc: "Hands-on practice with challenging competency questions so you can answer with poise and clarity.",
      agenda_4_title: "Tailored 30-Day Action Roadmap:",
      agenda_4_desc: "Clear weekly objectives and milestones to guide your job-search efforts over the next month.",
      consult_duration: "Duration: 45–60 Minutes Online",
      instapay_notice_title: "Payment & Confirmation:",
      instapay_notice_desc: "Sessions are pre-paid via InstaPay. Please share the transfer receipt on WhatsApp to manually confirm your agenda slot.",
      consult_book_btn: "Book Your Consultation Now",

      // Closing CTA
      closing_title: "Your Pharmaceutical Career Begins Today",
      closing_desc: "Do not let an outdated CV cost you opportunities that could reshape your career. Take action now and let your application reflect your real capabilities.",
      closing_btn_cv: "Order CV Writing via WhatsApp",
      closing_btn_consult: "Book a 1-on-1 Consultation",

      // Footer
      footer_bio: "A dedicated personal platform helping pharmacy students and graduates build ATS-compliant CVs and command a strong professional presence across multinational pharma and healthcare institutions.",
      footer_links_title: "Quick Links",
      footer_tracks_title: "Supported Tracks",
      footer_contact_title: "Contact & Assistance",
      track_rep: "Medical Representative",
      track_hosp: "Hospital & Clinical Pharmacy",
      track_reg: "Regulatory Affairs & PV",
      track_comm: "Community & Chain Pharmacy",
      track_qa: "Quality Assurance & QC",
      footer_copyright: "Hussein Abdelrazek. All rights reserved.",
      footer_disclaimer: "* Note: All InstaPay transactions require manual verification via WhatsApp screenshot receipt prior to service initiation or appointment confirmation.",

      // Modals & Form
      order_modal_title: "Order Professional CV Development",
      form_service_label: "Selected Service",
      form_track_label: "Target Pharmaceutical Track",
      form_name_label: "Full Name",
      form_phone_label: "WhatsApp Phone Number",
      form_phone_help: "Drafts, voice reviews, and order updates will be sent directly to this number.",
      form_grad_label: "Academic Year / Graduation Class",
      form_notes_label: "Additional Notes or Portfolio Links (Optional)",
      form_payment_method_label: "Payment & Submission Method",
      instapay_panel_title: "InstaPay Transfer Details:",
      instapay_instant_badge: "Instant & Zero Fees",
      copy_btn: "Copy Handle",
      instapay_warning_text: "⚠️ Important Manual Verification Notice: Submitting this form does not mark your order as paid automatically. After transferring, you will be redirected to WhatsApp to share the transfer screenshot for instant verification.",
      submit_order_whatsapp: "Confirm Order via WhatsApp",
      booking_modal_title: "Book a 1-on-1 Career Consultation",
      booking_focus_label: "Primary Focus of Session",
      booking_slot_label: "Preferred Timing & Slot",
      consult_fee_header: "Session Fee: 350 EGP / $20 USD (45-60 Mins)",
      booking_confirm_notice: "ℹ️ To prevent calendar conflicts, booking slots are manually confirmed on the calendar once your transfer receipt is verified on WhatsApp.",
      submit_booking_whatsapp: "Send Booking Request via WhatsApp"
    }
  };

  // State Management
  let currentLanguage = localStorage.getItem('preferred_lang') || CONFIG.defaultLang;
  let activePaymentMethod = 'instapay'; // 'instapay' or 'whatsapp'

  // DOM Elements
  const htmlElement = document.documentElement;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');
  const siteHeader = document.getElementById('siteHeader');
  const navMenu = document.getElementById('navMenu');
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navLinks = document.querySelectorAll('.nav-link');

  // Modals
  const orderModal = document.getElementById('orderModal');
  const bookingModal = document.getElementById('bookingModal');
  const orderForm = document.getElementById('orderForm');
  const bookingForm = document.getElementById('bookingForm');
  const orderServiceSelect = document.getElementById('orderServiceSelect');

  // Payment Tabs
  const tabInstaPay = document.getElementById('tabInstaPay');
  const tabWhatsApp = document.getElementById('tabWhatsApp');
  const instapayPanel = document.getElementById('instapayPanel');
  const copyInstapayBtn = document.getElementById('copyInstapayBtn');
  const copyHandleGeneric = document.querySelectorAll('.copy-handle-generic');

  // --------------------------------------------------------------------------
  // 2. LANGUAGE SWITCHER LOGIC
  // --------------------------------------------------------------------------
  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('preferred_lang', lang);

    // Set HTML Attributes
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update Language Toggle Button Label
    if (langLabel) {
      langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    // Translate all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Translate meta tags with data-i18n-meta
    const metaElements = document.querySelectorAll('[data-i18n-meta]');
    metaElements.forEach(el => {
      const key = el.getAttribute('data-i18n-meta');
      if (translations[lang][key]) {
        el.setAttribute('content', translations[lang][key]);
      }
    });

    // Translate Document Title
    if (translations[lang].meta_title) {
      document.title = translations[lang].meta_title;
    }

    // Update Input Placeholders based on language
    updatePlaceholders(lang);

    // Update Select Options
    if (orderServiceSelect && orderServiceSelect.options.length >= 4) {
      if (lang === 'ar') {
        orderServiceSelect.options[0].text = 'كتابة السيرة الذاتية الاحترافية (200 جنيه مصري)';
        orderServiceSelect.options[1].text = 'مراجعة وتدقيق السيرة الذاتية (50 جنيه مصري)';
        orderServiceSelect.options[2].text = 'برنامج Pharma Career Launchpad (650 جنيه)';
        orderServiceSelect.options[3].text = 'ورشة Medical Rep Interview Mastery (450 جنيه)';
      } else {
        orderServiceSelect.options[0].text = 'Professional CV Writing (200 EGP)';
        orderServiceSelect.options[1].text = 'CV Review & Audit (50 EGP)';
        orderServiceSelect.options[2].text = 'Pharma Career Launchpad (650 EGP)';
        orderServiceSelect.options[3].text = 'Medical Rep Interview Mastery (450 EGP)';
      }
    }

    const bookingFocus = document.getElementById('bookingFocus');
    if (bookingFocus && bookingFocus.options.length >= 4) {
      if (lang === 'ar') {
        bookingFocus.options[0].text = 'مراجعة وتدقيق السيرة الذاتية سطراً بسطر';
        bookingFocus.options[1].text = 'تحديد المسار الأنسب (دعاية طبية، مستشفيات، جودة، تسويق)';
        bookingFocus.options[2].text = 'التحضير لمقابلة عمل قادمة في شركة أدوية';
        bookingFocus.options[3].text = 'استشارة مهنية عامة وخطة عمل';
      } else {
        bookingFocus.options[0].text = 'Line-by-line CV Review & Audit';
        bookingFocus.options[1].text = 'Pharma Career Orientation (Sales, Hospital, Reg, QA)';
        bookingFocus.options[2].text = 'Interview Preparation for Pharma Roles';
        bookingFocus.options[3].text = 'General Career Advisory & Action Roadmap';
      }
    }
  }

  function updatePlaceholders(lang) {
    const isAr = lang === 'ar';
    const clientNameInput = document.getElementById('clientName');
    const clientPhoneInput = document.getElementById('clientPhone');
    const clientGradYear = document.getElementById('clientGradYear');
    const clientNotes = document.getElementById('clientNotes');
    const bookingName = document.getElementById('bookingName');
    const bookingPhone = document.getElementById('bookingPhone');

    if (clientNameInput) clientNameInput.placeholder = isAr ? 'د. أحمد محمد' : 'Dr. Ahmed Mohamed';
    if (clientPhoneInput) clientPhoneInput.placeholder = isAr ? '01012345678' : '+20 10 1234 5678';
    if (clientGradYear) clientGradYear.placeholder = isAr ? 'خريج 2025 - كلية الصيدلة جامعة القاهرة' : 'Class of 2025 - Faculty of Pharmacy';
    if (clientNotes) clientNotes.placeholder = isAr ? 'أي ملاحظات ترغب في مشاركتها حول أهدافك' : 'Any specific career goals or target pharmaceutical companies';
    if (bookingName) bookingName.placeholder = isAr ? 'د. أحمد محمد' : 'Dr. Ahmed Mohamed';
    if (bookingPhone) bookingPhone.placeholder = isAr ? '01012345678' : '+20 10 1234 5678';
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const targetLang = currentLanguage === 'ar' ? 'en' : 'ar';
      setLanguage(targetLang);
      showToast(targetLang === 'ar' ? 'تم تحويل اللغة إلى العربية' : 'Language switched to English');
    });
  }

  // --------------------------------------------------------------------------
  // 3. STICKY HEADER & NAV SCROLL OBSERVER
  // --------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('mobile-open');
      navToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        navToggleBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // Highlight active section on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === `#${id}`) {
            l.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 4. MODALS (ORDER & BOOKING)
  // --------------------------------------------------------------------------
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close modal when clicking close buttons or overlay background
  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(orderModal);
      closeModal(bookingModal);
    }
  });

  // Open Service Order Modal from triggers
  document.querySelectorAll('.open-order-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service-name');
      if (serviceName && orderServiceSelect) {
        // Find matching option
        for (let i = 0; i < orderServiceSelect.options.length; i++) {
          if (orderServiceSelect.options[i].value === serviceName) {
            orderServiceSelect.selectedIndex = i;
            break;
          }
        }
      }
      openModal(orderModal);
    });
  });

  // Open Booking Modal from triggers
  document.querySelectorAll('.open-booking-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(bookingModal);
    });
  });

  // --------------------------------------------------------------------------
  // 5. PAYMENT METHOD TABS IN MODAL
  // --------------------------------------------------------------------------
  if (tabInstaPay && tabWhatsApp && instapayPanel) {
    tabInstaPay.addEventListener('click', () => {
      activePaymentMethod = 'instapay';
      tabInstaPay.classList.add('active');
      tabWhatsApp.classList.remove('active');
      instapayPanel.style.display = 'block';
    });

    tabWhatsApp.addEventListener('click', () => {
      activePaymentMethod = 'whatsapp';
      tabWhatsApp.classList.add('active');
      tabInstaPay.classList.remove('active');
      instapayPanel.style.display = 'none';
    });
  }

  // --------------------------------------------------------------------------
  // 6. COPY INSTAPAY HANDLE TO CLIPBOARD
  // --------------------------------------------------------------------------
  function copyHandle() {
    navigator.clipboard.writeText(CONFIG.instapayHandle).then(() => {
      const msg = currentLanguage === 'ar'
        ? 'تم نسخ معرّف InstaPay إلى الحافظة: ' + CONFIG.instapayHandle
        : 'InstaPay handle copied to clipboard: ' + CONFIG.instapayHandle;
      showToast(msg);
    }).catch(() => {
      showToast('يرجى نسخ المعرف يدوياً: ' + CONFIG.instapayHandle);
    });
  }

  if (copyInstapayBtn) {
    copyInstapayBtn.addEventListener('click', copyHandle);
  }

  copyHandleGeneric.forEach(btn => {
    btn.addEventListener('click', copyHandle);
  });

  // --------------------------------------------------------------------------
  // 7. ORDER FORM SUBMISSION (BUILDS PRE-FILLED WHATSAPP MESSAGE)
  // --------------------------------------------------------------------------
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const selectedOption = orderServiceSelect.options[orderServiceSelect.selectedIndex];
      const serviceName = selectedOption.value;
      const servicePrice = selectedOption.getAttribute('data-price') || '';
      const track = document.getElementById('orderTrackSelect').value;
      const clientName = document.getElementById('clientName').value.trim();
      const clientPhone = document.getElementById('clientPhone').value.trim();
      const gradYear = document.getElementById('clientGradYear').value.trim();
      const notes = document.getElementById('clientNotes').value.trim();

      const isAr = currentLanguage === 'ar';

      let msg = isAr ? `مرحباً د. حسين عبد الرازق،\nأود طلب الخدمة التالية من موقعكم:\n\n`
                     : `Hello Dr. Hussein Abdelrazek,\nI would like to order the following service from your website:\n\n`;

      msg += isAr ? `📋 الخدمة: ${serviceName} (${servicePrice})\n`
                  : `📋 Service: ${serviceName} (${servicePrice})\n`;

      msg += isAr ? `🎯 المسار المستهدف: ${track}\n`
                  : `🎯 Target Track: ${track}\n`;

      msg += isAr ? `👤 الاسم: ${clientName}\n`
                  : `👤 Name: ${clientName}\n`;

      msg += isAr ? `📱 رقم الواتساب: ${clientPhone}\n`
                  : `📱 WhatsApp: ${clientPhone}\n`;

      if (gradYear) {
        msg += isAr ? `🎓 المؤهل / السنة الدراسية: ${gradYear}\n`
                    : `🎓 Graduation / Academic Year: ${gradYear}\n`;
      }

      if (notes) {
        msg += isAr ? `📝 ملاحظات: ${notes}\n`
                    : `📝 Notes: ${notes}\n`;
      }

      if (activePaymentMethod === 'instapay') {
        msg += isAr ? `\n💳 طريقة الدفع: تحويل عبر InstaPay لحساب (${CONFIG.instapayHandle})\nمرفق لقطة شاشة التحويل للتحقق وبدء التنفيذ.`
                    : `\n💳 Payment Method: InstaPay transfer to (${CONFIG.instapayHandle})\nTransfer screenshot is attached for verification.`;
      } else {
        msg += isAr ? `\n💳 طريقة الدفع: طلب مباشر عبر واتساب للتنسيق والمتابعة.`
                    : `\n💳 Payment Method: Direct WhatsApp request for coordination.`;
      }

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;

      // Show toast and open WhatsApp in new tab
      showToast(isAr ? 'جارٍ تحويلك إلى واتساب لإتمام الطلب...' : 'Redirecting to WhatsApp to complete your order...');
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        closeModal(orderModal);
      }, 700);
    });
  }

  // --------------------------------------------------------------------------
  // 8. CONSULTATION BOOKING FORM SUBMISSION
  // --------------------------------------------------------------------------
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bookingName').value.trim();
      const phone = document.getElementById('bookingPhone').value.trim();
      const focus = document.getElementById('bookingFocus').value;
      const slot = document.getElementById('bookingTimeSlot').value;

      const isAr = currentLanguage === 'ar';

      let msg = isAr ? `مرحباً د. حسين،\nأرغب في حجز جلسة استشارية فردية (1-on-1 Consultation) عبر Google Meet:\n\n`
                     : `Hello Dr. Hussein,\nI would like to book a 1-on-1 Career Consultation via Google Meet:\n\n`;

      msg += isAr ? `👤 الاسم: ${name}\n`
                  : `👤 Name: ${name}\n`;

      msg += isAr ? `📱 رقم الهاتف: ${phone}\n`
                  : `📱 WhatsApp: ${phone}\n`;

      msg += isAr ? `🎯 المحور الأساسي للجلسة: ${focus}\n`
                  : `🎯 Primary Focus: ${focus}\n`;

      msg += isAr ? `⏰ الفترة والموعد المفضل: ${slot}\n`
                  : `⏰ Preferred Time Slot: ${slot}\n`;

      msg += isAr ? `\n💳 رسوم الجلسة: 350 جنيه مصري عبر InstaPay لحساب (${CONFIG.instapayHandle})\nمرفق إيصال التحويل لتأكيد حجز الموعد في الأجندة.`
                  : `\n💳 Session Fee: 350 EGP via InstaPay to (${CONFIG.instapayHandle})\nTransfer receipt attached to confirm slot.`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;

      showToast(isAr ? 'جارٍ تحويلك إلى واتساب لتأكيد الحجز...' : 'Redirecting to WhatsApp to confirm your booking...');

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        closeModal(bookingModal);
      }, 700);
    });
  }

  // --------------------------------------------------------------------------
  // 9. TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color: var(--color-success); flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 4000);
  }

  // --------------------------------------------------------------------------
  // 10. INITIALIZATION
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // Set initial language from preference
    setLanguage(currentLanguage);

    // Set Dynamic Year in Footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    }
  });

})();
