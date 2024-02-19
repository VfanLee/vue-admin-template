import useLangStore from '@/stores/lang'

const langStore = useLangStore()

const getLanguage = () => {
  if (langStore.lang === 'zh') {
    return 'zh-Hans'
  } else {
    return 'en'
  }
}

async function imagesUploadHandler(blobInfo, progress) {
  console.log(blobInfo)
}

/**
 * TinyMCE 6：https://www.tiny.cloud/docs/tinymce/6/
 * Example：https://www.tiny.cloud/docs/tinymce/6/full-featured-open-source-demo/
 */
export const defaultConfig = {
  base_url: '/vue3-admin-template/vendor/tinymce',
  placeholder: '',
  // 插件配置
  plugins: 'quickbars lists advlist link table',
  height: 500,
  resize: false,
  // 菜单栏配置
  menubar: false,
  // 工具栏配置
  toolbar_mode: 'sliding',
  toolbar: `undo redo |
            blocks fontfamily fontsize |
            bold italic forecolor backcolor |
            alignleft aligncenter alignright alignjustify |
            bullist numlist outdent indent |
            link quickimage quicktable |
            removeformat`,
  // 快速选择
  quickbars_selection_toolbar: `bold italic quicklink quickimage quicktable`,
  // 状态栏
  statusbar: true,
  // 元素路径
  elementpath: true,
  // tiny 技术支持
  branding: false,
  // 语言类型
  language: getLanguage(),
  font_family_formats: `微软雅黑=Microsoft YaHei;
                        苹果苹方=PingFang SC;
                        宋体=simsun, serif;
                        仿宋体=FangSong, serif;
                        黑体=SimHei, sans-serif;
                        Arial=arial, helvetica, sans-serif;
                        Arial Black=arial black, avant garde;
                        Times New Roman=times new roman, times;`,
  font_size_formats: '14px 16px 18px 20px 24px 26px 28px 30px 32px 36px',
  // Copy & Paste
  paste_data_images: true,
  smart_paste: true,
  // 文件处理
  object_resizing: true,
  resize_img_proportional: true,
  // 图片处理
  image_caption: true,
  image_advtab: true,
  image_description: true,
  image_dimensions: true,
  image_title: true,
  image_uploadtab: true,
  images_upload_handler: imagesUploadHandler
}
