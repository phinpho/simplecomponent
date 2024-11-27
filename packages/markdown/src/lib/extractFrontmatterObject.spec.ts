import { extractFrontmatterObject } from './extractFrontmatterObject'

describe('extractFrontmatterObject', () => {
  it('returns an empty object if state is not an object', () => {
    const state = 'not an object'
    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if state is undefined', () => {
    expect(extractFrontmatterObject()).toEqual({})
  })

  it('returns an empty object if state is null', () => {
    const state = null
    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if state is an array', () => {
    const state: unknown[] = []
    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if options property is missing', () => {
    const state = {}
    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if options property is not an object', () => {
    const state = {
      options: 'not an object',
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if options property is null', () => {
    const state = {
      options: null,
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if options property is an array', () => {
    const state = {
      options: [],
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if file property is missing', () => {
    const state = {
      options: {},
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if file property is not an object', () => {
    const state = {
      options: {
        file: 'not an object',
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if file property is null', () => {
    const state = {
      options: {
        file: null,
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if file property is an array', () => {
    const state = {
      options: {
        file: [],
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if data property is missing', () => {
    const state = {
      options: {
        file: {},
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if data property is not an object', () => {
    const state = {
      options: {
        file: {
          data: 'not an object',
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if data property is null', () => {
    const state = {
      options: {
        file: {
          data: null,
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if data property is an array', () => {
    const state = {
      options: {
        file: {
          data: [],
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if frontmatter property is missing', () => {
    const state = {
      options: {
        file: {
          data: {},
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if frontmatter property is not an object', () => {
    const state = {
      options: {
        file: {
          data: {
            frontmatter: 'not an object',
          },
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns an empty object if frontmatter property is null', () => {
    const state = {
      options: {
        file: {
          data: {
            frontmatter: null,
          },
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({})
  })

  it('returns the frontmatter array if frontmatter is a valid array', () => {
    const state = {
      options: {
        file: {
          data: {
            frontmatter: [
              {
                title: 'Test Title',
                description: 'Test Description',
              },
            ],
          },
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual([
      {
        title: 'Test Title',
        description: 'Test Description',
      },
    ])
  })

  it('returns the frontmatter object if frontmatter is a valid object', () => {
    const state = {
      options: {
        file: {
          data: {
            frontmatter: {
              title: 'Test Title',
              description: 'Test Description',
            },
          },
        },
      },
    }

    expect(extractFrontmatterObject(state)).toEqual({
      title: 'Test Title',
      description: 'Test Description',
    })
  })
})
