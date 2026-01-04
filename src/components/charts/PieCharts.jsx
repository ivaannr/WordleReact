import { Cell, Pie, PieChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const RADIAN = Math.PI / 180;
const COLORS = ['#34be3b', "#ff3131", "#1e92ff", '#ff9300'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
        return null;
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const ncx = Number(cx);
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const ncy = Number(cy);
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
            {`${((percent ?? 1) * 100).toFixed(0)}%`}

            <tspan x={x} dy="-1.0em" dx="0.5em">
                {name}
            </tspan>
        </text>
    );
};

export function PieChartWithCustomizedLabel({ isAnimationActive = true, data }) {
    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                labelLine={false}
                label={renderCustomizedLabel}
                fill="#8884d8"
                dataKey="value"
                isAnimationActive={isAnimationActive}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <RechartsDevtools />
        </PieChart>
    );
}

export function GapPieChart({ isAnimationActive = true, data }) {
    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '32vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"

                cornerRadius="50%"
                fill="#8884d8"

                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
            />
            <RechartsDevtools />
        </PieChart>
    );
}