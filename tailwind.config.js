module.exports = {
    theme: {
        spacing: {
            px: '1px',
            0: '0px',
            0.5: '0.125rem',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            2.5: '0.625rem',
            3: '0.75rem',
            3.5: '0.875rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
            11: '2.75rem',
            12: '3rem',
            14: '3.5rem',
            16: '4rem',
            20: '5rem',
            24: '6rem',
            28: '7rem',
            32: '8rem',
            36: '9rem',
            40: '10rem',
            44: '11rem',
            48: '12rem',
            52: '13rem',
            56: '14rem',
            60: '15rem',
            64: '16rem',
            72: '18rem',
            80: '20rem',
            96: '24rem',
        },
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        gap: (theme) => theme('spacing'),
        gridAutoColumns: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)',
        },
        gridAutoRows: {
            auto: 'auto',
            min: 'min-content',
            max: 'max-content',
            fr: 'minmax(0, 1fr)',
        },
        gridColumn: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-7': 'span 7 / span 7',
            'span-8': 'span 8 / span 8',
            'span-9': 'span 9 / span 9',
            'span-10': 'span 10 / span 10',
            'span-11': 'span 11 / span 11',
            'span-12': 'span 12 / span 12',
            'span-full': '1 / -1',
        },
        gridColumnEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
        },
        gridColumnStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
        },
        gridRow: {
            auto: 'auto',
            'span-1': 'span 1 / span 1',
            'span-2': 'span 2 / span 2',
            'span-3': 'span 3 / span 3',
            'span-4': 'span 4 / span 4',
            'span-5': 'span 5 / span 5',
            'span-6': 'span 6 / span 6',
            'span-full': '1 / -1',
        },
        gridRowStart: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
        },
        gridRowEnd: {
            auto: 'auto',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
        },
        gridTemplateColumns: {
            none: 'none',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            7: 'repeat(7, minmax(0, 1fr))',
            8: 'repeat(8, minmax(0, 1fr))',
            9: 'repeat(9, minmax(0, 1fr))',
            10: 'repeat(10, minmax(0, 1fr))',
            11: 'repeat(11, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
        },
        gridTemplateRows: {
            none: 'none',
            1: 'repeat(1, minmax(0, 1fr))',
            2: 'repeat(2, minmax(0, 1fr))',
            3: 'repeat(3, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
        },
        margin: (theme, {negative}) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
        },
        padding: (theme) => theme('spacing'),
        space: (theme, {negative}) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        boxShadow: {
            DEFAULT: "8px 8px 40px rgba(95, 127, 178, 0.2);",
            sm: "0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            none: "none",
        },
        variants: {
            accessibility: ['responsive', 'focus-within', 'focus'],
            alignContent: ['responsive'],
            alignItems: ['responsive'],
            alignSelf: ['responsive'],
            animation: ['responsive'],
            appearance: ['responsive'],
            backdropBlur: ['responsive'],
            backdropBrightness: ['responsive'],
            backdropContrast: ['responsive'],
            backdropFilter: ['responsive'],
            backdropGrayscale: ['responsive'],
            backdropHueRotate: ['responsive'],
            backdropInvert: ['responsive'],
            backdropOpacity: ['responsive'],
            backdropSaturate: ['responsive'],
            backdropSepia: ['responsive'],
            backgroundAttachment: ['responsive'],
            backgroundBlendMode: ['responsive'],
            backgroundClip: ['responsive'],
            backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            backgroundImage: ['responsive'],
            backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            backgroundPosition: ['responsive'],
            backgroundRepeat: ['responsive'],
            backgroundSize: ['responsive'],
            backgroundOrigin: ['responsive'],
            blur: ['responsive'],
            borderCollapse: ['responsive'],
            borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            borderRadius: ['responsive'],
            borderStyle: ['responsive'],
            borderWidth: ['responsive'],
            boxDecorationBreak: ['responsive'],
            boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
            boxSizing: ['responsive'],
            brightness: ['responsive'],
            clear: ['responsive'],
            container: ['responsive'],
            contrast: ['responsive'],
            cursor: ['responsive'],
            display: ['responsive'],
            divideColor: ['responsive', 'dark'],
            divideOpacity: ['responsive', 'dark'],
            divideStyle: ['responsive'],
            divideWidth: ['responsive'],
            dropShadow: ['responsive'],
            fill: ['responsive'],
            filter: ['responsive'],
            flex: ['responsive'],
            flexDirection: ['responsive'],
            flexGrow: ['responsive'],
            flexShrink: ['responsive'],
            flexWrap: ['responsive'],
            float: ['responsive'],
            fontFamily: ['responsive'],
            fontSize: ['responsive'],
            fontSmoothing: ['responsive'],
            fontStyle: ['responsive'],
            fontVariantNumeric: ['responsive'],
            fontWeight: ['responsive'],
            gap: ['responsive'],
            gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
            grayscale: ['responsive'],
            gridAutoColumns: ['responsive'],
            gridAutoFlow: ['responsive'],
            gridAutoRows: ['responsive'],
            gridColumn: ['responsive'],
            gridColumnEnd: ['responsive'],
            gridColumnStart: ['responsive'],
            gridRow: ['responsive'],
            gridRowEnd: ['responsive'],
            gridRowStart: ['responsive'],
            gridTemplateColumns: ['responsive'],
            gridTemplateRows: ['responsive'],
            height: ['responsive'],
            hueRotate: ['responsive'],
            inset: ['responsive'],
            invert: ['responsive'],
            isolation: ['responsive'],
            justifyContent: ['responsive'],
            justifyItems: ['responsive'],
            justifySelf: ['responsive'],
            letterSpacing: ['responsive'],
            lineHeight: ['responsive'],
            listStylePosition: ['responsive'],
            listStyleType: ['responsive'],
            margin: ['responsive'],
            maxHeight: ['responsive'],
            maxWidth: ['responsive'],
            minHeight: ['responsive'],
            minWidth: ['responsive'],
            mixBlendMode: ['responsive'],
            objectFit: ['responsive'],
            objectPosition: ['responsive'],
            opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
            order: ['responsive'],
            outline: ['responsive', 'focus-within', 'focus'],
            overflow: ['responsive'],
            overscrollBehavior: ['responsive'],
            padding: ['responsive'],
            placeContent: ['responsive'],
            placeItems: ['responsive'],
            placeSelf: ['responsive'],
            placeholderColor: ['responsive', 'dark', 'focus'],
            placeholderOpacity: ['responsive', 'dark', 'focus'],
            pointerEvents: ['responsive'],
            position: ['responsive'],
            resize: ['responsive'],
            ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
            ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
            ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
            ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
            ringWidth: ['responsive', 'focus-within', 'focus'],
            rotate: ['responsive', 'hover', 'focus'],
            saturate: ['responsive'],
            scale: ['responsive', 'hover', 'focus'],
            sepia: ['responsive'],
            skew: ['responsive', 'hover', 'focus'],
            space: ['responsive'],
            stroke: ['responsive'],
            strokeWidth: ['responsive'],
            tableLayout: ['responsive'],
            textAlign: ['responsive'],
            textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
            textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
            textOverflow: ['responsive'],
            textTransform: ['responsive'],
            transform: ['responsive'],
            transformOrigin: ['responsive'],
            transitionDelay: ['responsive'],
            transitionDuration: ['responsive'],
            transitionProperty: ['responsive'],
            transitionTimingFunction: ['responsive'],
            translate: ['responsive', 'hover', 'focus'],
            userSelect: ['responsive'],
            verticalAlign: ['responsive'],
            visibility: ['responsive'],
            whitespace: ['responsive'],
            width: ['responsive'],
            wordBreak: ['responsive'],
            zIndex: ['responsive', 'focus-within', 'focus'],
        },
        plugins: [],
    }
}
