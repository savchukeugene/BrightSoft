export const devices = [
    {
        value: 'heaters',
        label: 'Чайники',
        children: [
            {
                value: 'Philips',
                label: 'Philips PX500',
                children: [
                    {
                        value: '1200',
                        label: '1200WT',
                    },
                ],
            },
        ],
    },
    {
        value: 'plates',
        label: 'Плиты',
        children: [
            {
                value: '123',
                label: 'Газовые',
                children: [
                    {
                        value: 'strela',
                        label: 'Стрела 700',
                    },
                ],
            },
            {
                value: 'nanjing',
                label: 'Индукционные',
                children: [
                    {
                        value: 'bosh',
                        label: 'Bosh Ultimate',
                        children: [
                            {
                                value: '30000',
                                label: '3000WT',
                            },
                        ]
                    },
                ],
            },
        ],
    },
];
