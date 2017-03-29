import React from 'react'

function Icon({ name, className, screenReader, ...props }) {
  /**
   * The following icons automatically get screen reader text.
   *
   * HEADS UP: Only add to the following list if you're confident an icon
   * won't be used as ornamentation, and its meaning is not ambiguous.
   *
   * For example: an icon of the Avvo wordmark can only be interpreted as
   * 'Avvo'. A '+' icon, on the other hand, could mean 'New', 'Add', 'cross',
   * or even be used as decoration.
   *
   * This list should typically consist of wordmarks.
   */
  const DEFAULT_SCREEN_READER_TEXT = {
    /* eslint-disable quote-props */
    'avvo':               'Avvo',
    'facebook':           'Facebook',
    'facebook-square':    'Facebook',
    'google-plus':        'Google+',
    'google-plus-square': 'Google+',
    'linkedin':           'LinkedIn',
    'linkedin-square':    'LinkedIn',
    'twitter':            'Twitter',
    'twitter-square':     'Twitter',
    'youtube':            'YouTube',
    'youtube-square':     'YouTube',
    /* eslint-enable */
  }

  const classNames = (() => {
    const iconClasses = ['icon', `icon-${name}`]
    if (className) iconClasses.push(className)
    return iconClasses.join(' ')
  })()

  const screenReaderText = (() => {
    if (typeof screenReader !== 'undefined') return screenReader
    return props.title || DEFAULT_SCREEN_READER_TEXT[name]
  })()

  /**
   * Render the icon
   *
   * Modern versions of assistive technologies will announce CSS generated
   * content, as well as specific Unicode characters. To avoid unintended and
   * confusing output in screen readers (particularly when icons are used
   * purely for decoration), we always render icons with the
   * `aria-hidden="true"` attribute.
   */
  const render = () => {
    let icon = <span {...props} className={classNames} aria-hidden="true" />

    if (screenReaderText) {
      icon = (
        <span>
          {icon}
          <span className="sr-only">{screenReaderText}</span>
        </span>
      )
    }

    return icon
  }

  return render()
}

Icon.propTypes = {
  name:         React.PropTypes.string.isRequired,
  className:    React.PropTypes.string,
  screenReader: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  title:        React.PropTypes.string,
}

export { Icon }
