import GoodsItem from './GoodsItem'

/* eslint-disable react/prop-types */
export default function GoodsList(props) {
	const { goods = [], addToBasket = Function.prototype } = props

	if (!goods.length) {
		return <h3>Nothing here</h3>
	}
	return (
		<div className='goods'>
			{goods.map(item => (
				<GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
			))}
		</div>
	)
}
