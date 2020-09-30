class RichTextArea < Trestle::Form::Field
  def field
    content_tag :div, class: 'input-group' do
      builder.raw_rich_text_area(name, options)
    end
  end
end
